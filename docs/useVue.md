```vue
// composition-js-vue2
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>

// composition-ts-vue2
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>

// composition-js
<script>
export default {
  setup() {},
};
</script>

// composition-ts
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

// js
<script>
export default {};
</script>

// ts
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
```
