<script setup lang="ts" generic="T extends any, O extends any">

</script>

<template>
  <div>
    <Card
      title="Roccella Jonica, la Lampedusa che l'Italia ignora"
      author="Di Alessandro Puglia"
      date="29 Giugno 2022"
      avatar-url="https://picsum.photos/id/237/200"
      background-image-url="https://picsum.photos/id/251/800/650"
      inline-avatar
      class="heading-card"
    >
      <Label text="Migranti" />
    </Card>

    <div class="row">
      <Card
        title="Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura"
        author="Di Ugo Lombi"
        date="14 Luglio 2022"
        avatar-url="https://picsum.photos/id/220/200"
        background-image-url="https://picsum.photos/id/250/800/650"
        :inline-avatar="false"
        class="news-col1"
      >
        <Label text="Allarmi" color="#E2F1E8" />
      </Card>

      <div class="news-col2">
        <Card
          title="Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni"
          author="Di Diletta Grella"
          date="14 Luglio 2022"
          avatar-url="https://picsum.photos/id/222/200"
          background-image-url="https://picsum.photos/id/254/800/650"
          :inline-avatar="false"
          class="news-card2"
        >
          <Label text="Esperimenti" color="#E2F0F1" />
        </Card>

        <Card
          title="Nelle città italiane tutti in piazza per e con Kiev"
          author="Di Anna Spena"
          date="14 Luglio 2022"
          avatar-url="https://picsum.photos/id/228/200"
          background-image-url="https://picsum.photos/id/255/800/650"
          :inline-avatar="false"
          class="news-card3"
        >
          <Label text="Ucraina" color="#F1DADA" />
        </Card>
      </div>
    </div>

    <SupportBanner />
  </div>
</template>

<style lang="scss">

.heading-card {
  width: 100%;
  height: 320px;
}

@media (min-width: 680px) {
  .heading-card {
    height: 500px;
  }
}

.news-col1 {
  width: 100%;
  height: 320px;

  @media (min-width: 680px) {
    width: 57%;
    height: 845px;
  }
}

.news-col2 {
  width: 100%;

  @media (min-width: 680px) {
    width: 43%;
  }
}

.news-card2 {
  height: auto;

  @media (min-width: 680px) {
    height: 471px;
  }
}

.news-card3 {
  height: auto;

  @media (min-width: 680px) {
    height: 374px; 
  }
}
</style>
