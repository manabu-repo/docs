# `Vue` 中的开发小技巧

## 1.组件传值在 `data` 中做一次嫁接

```js
props: {
  params: {
    type: Object,
    default: () => {
        return {};
    },
  },
},
data() {
  return {
    sourceData: this.params
  }
}
```

## 2.动态绑定 `class` 设置样式

```html
<div class="service-menu">
    <div class="service-menu-item">
    <span v-for="(item, index) in breadCrumb" :key="item.name">
        <span
        class="menu-item"
        :class="{'active' : item.type === curSelectType}"
        @click="onMenuClick(item.type)"
        >{{ item.name }}</span>
        <span class="separator" v-show="index !== breadCrumb.length - 1">|</span>
    </span>
    </div>
</div>

<script>
export default {
  data() {
    curSelectType: "microApp",
  }
}
</script>
```

## 3.异步或开销大的操作时使用侦听器 `wacth`

```js
watch: {
  findPluginByType(val) {
    this.pluginList = val;
  },
  breadCrumb: {
    immediate: true,
    deep: true,
    handler(val) {
      if (val.length > 0) {
        this.curSelectType = val[0].type;
      }
    }
  }
}
```

## 4.vue-apollo 请求的两种方式

```js
import SEARCH_ALL_PLUGIN_BY_KEYWORD_IN_NAME_OR_IN_TYPE from "../graphql/query/searchAllPluginByKeywordInNameOrInType.gql";

apollo: {
  searchAllPluginByKeywordInNameOrInType: {
    query: SEARCH_ALL_PLUGIN_BY_KEYWORD_IN_NAME_OR_IN_TYPE,
    variables() {
      return {
        name: "",
        type: this.curSelectType,
        page: {},
      };
    },
  },
},
```

```js
async findPluginById(id) {
  let vm = this;
  let {
    data: { findPluginById },
  } = await vm.$apollo.query({
    query: FIND_PLUGIN_BY_ID,
    variables: { id },
  });
  return findPluginById;
}
```

## 5.Array filter

```js
computed: {
  filterData() {
    if (!this.input) {
      return this.pluginList;
    }
    return this.pluginList.filter((value) => {
      return value.name.includes(this.input);
    });
  },
}
```

## 6. indexOf && filter

```js
computed: {
  filterData() {
    if (this.searchValue === "") {    // 搜索框为空
      if (this.searchOption.type !== "ALL") {     // 包含额外限制条件
        return this.dataSource.filter((item) => {
          return item.state === this.searchOption.type;
        });
      } else {    // 无限制
        return this.dataSource;
      }
    } else {    // 搜索框不为空
      if (this.searchOption.type !== "ALL") {   // 包含限制条件
        return this.dataSource.filter((item) => {
          return (
            item.name.indexOf(this.searchValue) !== -1 &&
            item.state === this.searchOption.type
          );
        });
      } else {    // 无限制条件
        return this.dataSource.filter((item) => {
          return item.name.indexOf(this.searchValue) !== -1;
        });
      }
    }
  },
}
```

## 7.vue-apollo 强制优先走网络请求

Apollo 默认优先走缓存。

```js
findAllIdlType: {
  query: FINE_ALL_IDL_TYPE,
  variables() {
    return {
      categoryPath: this.curActiveNodeData.path,
      page: {
        page: this.pagination.current - 1,
        size: this.pagination.pageSize,
      },
    };
  },
  fetchPolicy: "network-only",
},
```

## 8.使用计算属性提高代码利用率

```js
computed: {
  dataSource() {
    let data = [];

    if (this.keyword === "") {
      data = this.findAllIdlType;
    } else {
      data = this.searchIdlType;
    }

    if (!_.isEmpty(data)) {
      data.forEach((item) => {
        let fields = item.fullTypename.split(".");
        item.namespace = fields[0];
        item.typeId = fields[1];
      });
    } else {
      data = [];
    }

    return data;
  },
},
```

## 9.ES6 对象解耦

```js
async findIdlTypeById(id) {
  let {
    data: { findIdlTypeById },
  } = await this.$apollo.query({
    query: FIND_IDL_TYPE_BY_ID,
    variables: {
      id: id,
    },
  });
  return findIdlTypeById;
},
```

apollo 请求还是推荐先考虑自动请求的方式，而不是方法。这样可以不必每次去手动更新数据，而是更新到缓存。

## 10.树结构递归查询

目前项目需求中在使用的解决方案，个人认为树结构在前端的更新这个每次动态的控制节点更新不是最优解，仅用参考。

```js
addTreeNode(tree, key, id, name, path) {
  let vm = this;
  let title = tree.forEach((element) => {
    if (element.key === key) {
      if (element.children) {
        element.children.push({
          title: name,
          key: id,
          superiorId: key,
          path: path,
        });
      } else {
        element.children = [];
        element.children.push({
          title: name,
          key: id,
          superiorId: key,
          path: path,
        });
      }
      return "find";
    }
    if (!element.children) {
      return "none";
    }
    this.addTreeNode(element.children, key, name);
  });
},
getKeyPath(key, nodes, path) {
  let that = this;
  if (path === undefined) {
    path = [];
  }

  for (let item of nodes) {
    let tmp = path.concat();
    tmp.push(item.key);

    if (key === item.key) {
      return tmp;
    }

    if (item.children) {
      let result = that.getKeyPath(key, item.children, tmp);
      if (result) {
        return result;
      }
    }
  }
},
async createTree(id, tree) {
  let node = await this.findAllIdlCategoryBySuperiorId(id);
  if (node === []) {
    return "none";
  }

  node.forEach((item) => {
    if (tree !== undefined) {
      tree.push({
        title: item.name,
        key: item.id,
        superiorId: item.superiorId,
        path: item.path,
        children: [],
      });
      this.createTree(item.key, item.children);
    }
  });
},
```

## 11. Apollo Subscribe （apollo websocket 长连接的两种方式）

```js
apollo: {
  $subscribe: {
    subscribe: {
      query: SUBSCRIBE,
      variables() {
        return {
          namespace: "",
          topic: "test-topic",
        }
      },
      result({ data: {subscribe} }) {
        this.subscribeData = subscribe;
      }
    }
  }
},
```

```js
onCollectionListener(namespace = "", topic) {
  let vm = this;

  const observer = this.$apollo.subscribe({
    query: SUBSCRIBE,
    variables: {
      namespace: namespace,
      topic: topic,
    },
  });

  observer.subscribe({
    next(resp) {
      let response = resp.data.subscribe;
      // console.log("response", response);
    },
  });
},
```
