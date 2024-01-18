<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Label'
})
</script>

<script setup lang="ts">
import { LabelProps } from './types'

withDefaults(defineProps<LabelProps>(), {
  color: '#fff'
})
</script>

<template>
  <div
    class="c-label"
    :style="{ background: color }"
  >
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
@import '~vars';

.c-label {
  height: 20px;
  padding: 4px 12px;
  color: $black;
  box-shadow: -2px 2px 0px $black;
  border-radius: 4px;
  border: 1px $black solid;
  font-size: 10px;
  line-height: 12px;
}
</style>
