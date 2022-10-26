<template>
  <div class="mt-3">
    <section :style="{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie['backdrop_path']})`}"
             class="movie-banner position-relative">
      <div class="position-absolute top-50 start-50 translate-middle">
        <Icon name="ic:sharp-play-circle" size="50"></Icon>
      </div>
      <div class="movie-banner-text position-absolute">
        <h1 class="display-1">{{ movie['title'] }}</h1>
        <div class="rating mb-2">
          <Icon name="ri:star-s-fill"></Icon>
          <Icon name="ri:star-s-fill"></Icon>
          <Icon name="ri:star-s-fill"></Icon>
          <Icon name="ri:star-half-s-line"></Icon>
          <Icon name="ri:star-s-line"></Icon>
        </div>
        <div class="d-flex">
          <div v-for="(genre, index) in movie['genres']" :key="index" class="me-2">
            {{ genre["name"] }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const {data: movie} = await useFetch('/api/tmdb', {
  params: {
    media: "movie",
    categorie: route.params.id
  },
  key: route.params.id.toString()
})
</script>

<style lang="scss" scoped>
.movie-banner {
  height: 70vh;
  background-color: rgba(0 0 0 / 50%);
  background-blend-mode: darken;
  background-size: cover;
  background-position: center;

  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .movie-banner-text {
    bottom: 150px;
    left: 100px;
  }

  .rating {
    color: #ffdf1a;
  }
}
</style>