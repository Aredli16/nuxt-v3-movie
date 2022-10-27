<template>
  <div>
    <section v-if="randomHeroMovie['backdrop_path']" id="hero" class="position-relative mt-3">
      <img :src="`https://image.tmdb.org/t/p/original/${randomHeroMovie['backdrop_path']}`" alt="backdrop-home"
           class="rounded-4 w-100">
      <div class="hero-detail position-absolute top-50 translate-middle-y d-none d-lg-block">
        <h1>{{ randomHeroMovie["title"] }}</h1>
        <p v-if="randomHeroMovie['tagline']" class="fst-italic">
          {{ randomHeroMovie["tagline"] }}</p>
        <NuxtLink :external="true" :to="{name: 'movies-id', params: {id: randomHeroMovie['id']}, hash: '#trailer'}"
                  class="btn btn-danger">
          <Icon name="material-symbols:play-arrow"/>
          Voir le trailer
        </NuxtLink>
      </div>

      <a class="position-absolute start-50 top-50 translate-middle text-white d-block d-lg-none">
        <Icon name="ic:baseline-play-circle" size="50"></Icon>
      </a>
    </section>

    <MediaComponent id="popularMovie" :medias="popularMovie['results']" navigate="movies-id"
                    section-title="Les films les plus populaires"/>
    <MediaComponent id="popularSeries" :medias="popularSeries['results']" navigate="series-id"
                    section-title="Les series les plus populaires"/>
  </div>
</template>

<script lang="ts" setup>

const {data: randomHeroMovie} = await useFetch('/api/tmdb', {
  params: {
    media: 'movie',
    categorie: 'popular',
    random: true
  }
})

const {data: popularMovie} = await useFetch('/api/tmdb', {
  params: {
    media: 'movie',
    categorie: 'popular'
  }
})

const {data: popularSeries} = await useFetch('/api/tmdb', {
  params: {
    media: 'tv',
    categorie: 'popular'
  }
})
</script>

<style lang="scss" scoped>
#hero {
  img {
    filter: brightness(50%);
    max-height: 60vh;
    object-fit: cover;
    object-position: center;
  }

  h1 {
    font-size: 5.6em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  p::before {
    content: "- ";

  }

  .hero-detail {
    left: 50px
  }
}

</style>