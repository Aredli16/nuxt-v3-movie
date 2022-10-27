<template>
  <div class="mt-3">
    <section :style="{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie['backdrop_path']})`}"
             class="movie-banner position-relative">
      <div class="position-absolute top-50 start-50 translate-middle">
        <NuxtLink :external="true" class="text-white" to="#trailer">
          <Icon name="ic:sharp-play-circle" size="50"></Icon>
        </NuxtLink>
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
            <span class="fst-italic">{{ genre["name"] }}</span>
          </div>
        </div>
        <p class="mt-3">
          {{ movie['overview'] }}
        </p>
      </div>
    </section>


    <section id="casting" class="mt-3">
      <h1 class="section-title">Casting</h1>
      <div id="cast-carousel" class="d-flex">
        <div v-for="(cast, index) in credits['cast']" :key="index" class="me-3 mb-1">
          <img v-if="cast['profile_path']" :src="`https://image.tmdb.org/t/p/original/${cast['profile_path']}`"
               alt="cast" class="w-auto">
          <p class="mt-2">{{ cast['name'] }}</p>
        </div>
      </div>
    </section>

    <section v-if="videos['results'][0]" id="trailer" class="mt-3">
      <h1 class="section-title">Trailer</h1>
      <div class="text-center">
        <a href="#trailer"></a>
        <iframe :src="`http://www.youtube.com/embed/${videos['results'][0]['key']}`" height="700"
                type="text/html"
                width="70%"/>
      </div>
    </section>

    <hr>

    <section id="production">
      <div class="d-flex flex-wrap justify-content-center align-items-baseline">
        <div v-for="(company, index) in movie['production_companies']" :key="index" class="mx-auto">
          <img v-if="company['logo_path']" :src="`https://image.tmdb.org/t/p/original/${company['logo_path']}`"
               alt="company">
          <p v-else>{{ company['name'] }}</p>
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
  initialCache: false
})


const {data: credits} = await useFetch('/api/tmdb', {
  params: {
    media: "movie",
    categorie: route.params.id,
    optional: "credits"
  },
  initialCache: false
})

const {data: videos} = await useFetch('/api/tmdb', {
  params: {
    media: "movie",
    categorie: route.params.id,
    optional: "videos"
  },
  initialCache: false
})
</script>

<style lang="scss" scoped>
@import "assets/style/colors";

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
    bottom: 80px;
    left: 100px;
    right: 100px;
  }

  .rating {
    color: #ffdf1a;
  }
}

.section-title {
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: $dark-2;
}

#casting {
  #cast-carousel {
    overflow-x: scroll;
    scrollbar-width: auto;
    scrollbar-color: $red;

    &::-webkit-scrollbar {
      height: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $red;
      border-radius: 10px;
    }

    img {
      height: 400px;
    }
  }
}

#production {
  img {
    width: auto;
    height: 50px;
  }
}
</style>