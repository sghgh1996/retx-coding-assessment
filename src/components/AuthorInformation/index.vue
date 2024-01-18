<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthorInformation'
})
</script>

<script setup lang="ts">
import { AuthorInformationProps } from './types'

defineProps<AuthorInformationProps>()
</script>

<template>
  <div :class="{ 'row items-center': inline, 'column': !inline }">
    <img
      class="avatar"
      :class="{ 'q-mr-md': inline, 'q-mb-md': !inline }"
      :src="avatarUrl"
    />

    <div>
      <div class="author">
        {{ author }}
      </div>

      <div class="date">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  height: 48px;
  width: 48px;
  border-radius: 50%;
}

.author {
  line-height: 24px;
  word-wrap: break-word
}

.date {
  font-size: 10px;
  line-height: 16px;
  word-wrap: break-word
}
</style>
