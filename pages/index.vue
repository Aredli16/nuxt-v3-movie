<template>
  <main class="container px-0 my-5">
    <section id="hero" class="mt-5">
      <img :src="`https://image.tmdb.org/t/p/original/${randomHeroMovie['backdrop_path']}`" alt="backdrop-home">
      <div class="hero-detail d-none d-md-block">
        <h1>{{ randomHeroMovie["title"] }}</h1>
        <p class="fst-italic">
          {{ randomHeroMovie["tagline"] }}</p>
        <button class="btn btn-danger">
          <Icon name="material-symbols:play-arrow"/>
          Voir le trailer
        </button>
      </div>
    </section>

    <MediaComponent id="popularMovie" :medias="popularMovie['results']" section-title="Les films les plus populaires"/>
    <MediaComponent id="popularSeries" :medias="popularSeries['results']"
                    section-title="Les series les plus populaires"/>
  </main>
</template>

<script lang="ts" setup>
import MediaComponent from "~/pages/MediaComponent.vue";

const {data: randomHeroMovie} = useFetch('/api/tmdb', {
  params: {
    media: 'movie',
    categorie: 'popular',
    random: true
  }
})

const {data: popularMovie} = useFetch('/api/tmdb', {
  params: {
    media: 'movie',
    categorie: 'popular'
  }
})

const {data: popularSeries} = useFetch('/api/tmdb', {
  params: {
    media: 'tv',
    categorie: 'popular'
  }
})
</script>

<style lang="scss" scoped>
#hero {
  position: relative;

  img {
    filter: brightness(50%);
    border-radius: 10px;
    width: 100%;
    max-height: 60vh;
    object-fit: cover;
    object-position: center;
  }

  h1 {
    font-size: 5.6em;
  }

  p::before {
    content: "- ";

  }

  .hero-detail {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
  }
}

</style>