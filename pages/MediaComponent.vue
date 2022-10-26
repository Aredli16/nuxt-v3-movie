<template>
  <section class="mt-5">
    <div class="section-title d-flex justify-content-between align-items-center py-3 px-4 mb-5">
      <h2>{{ sectionTitle }}</h2>
      <div>
        <span class="carousel-controller" @click="scrollLeft">
          <Icon name="material-symbols:arrow-back-ios"></Icon>
        </span>
        <span class="carousel-controller ms-1" @click="scrollRight">
          <Icon name="material-symbols:arrow-forward-ios"></Icon>
        </span>
      </div>
    </div>

    <div :id="id" class="carousel-img d-flex">
      <div v-for="(media, index) in medias" :key="index">
        <img :src="`https://image.tmdb.org/t/p/original/${media['poster_path']}`" alt="poster" class="mb-4 me-3">
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  sectionTitle: {
    type: String,
    required: true
  },
  medias: {
    type: Object,
    required: true
  }
})

function scrollRight() {
  document.getElementById(props.id).scrollLeft += 1000
}

function scrollLeft() {
  document.getElementById(props.id).scrollLeft -= 1000
}

</script>

<style lang="scss" scoped>
@import "assets/style/colors";

.section-title {
  background-color: $dark-2;
}

.carousel-controller {
  cursor: pointer;
}

.carousel-img {
  overflow-x: scroll;
  scrollbar-width: auto;
  scrollbar-color: $red;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $red;
    border-radius: 10px;
  }

  img {
    width: auto;
    height: 400px;
  }
}

</style>