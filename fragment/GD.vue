<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: "GD",
  methods: {
    moveShape(shape) {
      const path = _.cloneDeep(shape.props.path);
      const len = path.length || 10;
      const lines = turf.lineString(path);
      const curved = turf.bezierSpline(lines, { resolution: 100 * len });
      const pathBucket = curved.geometry.coordinates;

      const interval = setInterval(() => {
        let p = pathBucket.shift();

        if (!p) {
          clearInterval(interval);
        }

        shape.updateProps({
          lon: p[0],
          lat: p[1],
        });
      }, 500);
      this.intervalList.push(interval);
    },

    async moveShapeFor(shape) {
      // console.log('path', shape.props.path);

      const lines = turf.lineString(shape.props.path);
      const curved = turf.bezierSpline(lines);
      const pathBucket = curved.geometry.coordinates;

      const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };

      const getPath = (path) => {
        return sleep(300).then((v) => pathBucket[path]);
      };

      for (let index = 0; index < pathBucket.length; index++) {
        let p = await getPath(index);
        // console.log('p', p);
        shape.updateProps({
          lon: p[0],
          lat: p[1],
        });
      }
    },

    getIdsByTree(tree, ids = []) {
      tree.map(item => {
        if (item.children.length) {
          this.getIdsByTree(item.children, ids);
        } else {
          ids.push(item.key);
        }
      });

      return ids;
    },

    filterNodeByTree(ids, tree) {
      const fn = (id, tree) => {
        tree.map(item => {
          if (item.key === id) {
            let index = tree.findIndex(e => e.key === id);
            tree.splice(index, 1);
          } else {
            fn(id, item.children);
          }
        });
      };

      ids.map(id => fn(id, tree));
      return tree;
    },
  },
};
</script>

<style>
</style>