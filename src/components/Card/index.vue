<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card'
})
</script>

<script setup lang="ts">
import { CardProps } from './types'

defineProps<CardProps>()
</script>

<template>
  <div
    class="c-card column justify-end items-start"
    :style="{
      backgroundImage: 'url(' + backgroundImageUrl + ')'
    }"
  >
    <slot />
    <div class="card-title">
      {{ title }}
    </div>

    <AuthorInformation
      :avatar-url="avatarUrl"
      :author="author"
      :date="date"
      :inline="inlineAvatar"
    />
  </div>
</template>

<style scoped lang="scss">
@import '~vars';

.c-card {
  padding: 24px 16px;
  background-color: linear-gradient(0deg, rgba($black, 0.20) 0%, rgba($black, 0.20) 100%);
  background-size: cover;
  background-position: center;
  gap: 16px;
  color: $white;

  .card-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
    max-width: 100%;
  }
}

@media (min-width: 680px) {
  .c-card {
    padding: 44px 40px;
    gap: 24px;

    .card-title {
      font-size: 40px;
      line-height: 54px;
      max-width: 820px;
    }
  }
}
</style>
