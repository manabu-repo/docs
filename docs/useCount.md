# useCount

## default vue3

```js
// counter.js
import { ref, computed } from "vue";

const useCounter = () => {
  let count = ref(1);

  const add = () => {
    count.value++;
  };

  let double = computed(() => {
    count.value * 2;
  });

  return { count, double, add };
};

export default useCounter;
```

```vue
<!-- view.vue -->
<template>
  <button @click="add">Count: {{ count }}</button>
</template>

<script setup>
import useCounter from "./UseCounter/counter";

let { count, double, add } = useCounter();
</script>
```

## ts vue3

```vue
<template>
  <div>{{ count }}</div>
  <button @click="inc">inc</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Count",
  setup() {
    const count = ref(0);
    const inc = () => count.value++;

    return {
      count,
      inc,
    };
  },
});
</script>
```

## jsx

```jsx
import { ref } from "vue";

const useCount = () => {
  const count = ref(0);
  const inc = () => count.value++;

  return {
    count,
    inc,
  };
};

export default useCount;
```

```vue
<template>
  <button @click="inc">{{ count }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useCount from "./useCount.jsx";

export default defineComponent({
  setup() {
    const { count, inc } = useCount();
    return { count, inc };
  },
});
</script>
```

## tsx

```tsx
import { ref } from "vue";

const Count = () => {
  const count = ref(0);
  const inc = () => count.value++;

  return {
    count,
    inc,
  };
};

export default Count;
```

```vue
<template>
  <button @click="inc">{{ count }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Count from "./Count";

export default defineComponent({
  setup() {
    const { count, inc } = Count();
    return { count, inc };
  },
});
</script>
```
