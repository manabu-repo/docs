# transition-animation

## Vue 中过渡想效果的应用方案

### 进入/离开 动画

- 在 `CSS` 过渡和动画中自动应用 `class`

- 可以配合使用第三方 `CSS` 动画库，如 `Animate.css`

- 在过渡钩子函数中使用 `JavaScript` 直接操作 `DOM`

- 可以配合使用第三方 `JavaScript` 动画库，如 `Velocity.js`

#### 单元素/组件的过渡

```vue
<template>
  <div class="container">
    <button v-on:click="show = !show">切换</button>
    <transition name="fade">
      <p v-if="show">Akashi</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SingleElement",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
```

##### 过渡的类名

在进入/离开的过渡中，会有 `6` 个 `class` 切换。

- `v-enter`：

定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

- `v-enter-active`：

定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

- `v-enter-to`：

2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

- `v-leave`：

定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

- `v-leave-active`：

定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

- `v-leave-to`：

2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
