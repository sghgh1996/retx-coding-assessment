<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SupportBanner'
})
</script>

<template>
  <div class="c-banner row justify-between items-center flex-wrap">
    <h2 class="banner-title">
      Il tuo supporto è fondamentale
    </h2>

    <RouterLink
      to="#"
      class="banner-link row items-center"
    >
      Dai il tuo contributo

      <IconArrowRight color="#000" />
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
@import '~vars';

.c-banner {
  width: 100%;
  padding: 32px 16px;
  color: $black;
  background: $merino;
  gap: 16px;

  .banner-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin: 0;
  }

  .banner-link {
    font-weight: 700;
    color: $black;
    text-decoration: none;
    gap: 4px;
  }
}

@media (min-width: 680px) {
  .c-banner {
    padding: 84px 40px;

    .banner-title {
      font-size: 40px;
      line-height: 46px;
    }
  }
}
</style>
