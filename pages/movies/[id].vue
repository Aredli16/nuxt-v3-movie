<template>
  <div class="mt-3">
    <MediaInformation :credits="credits" :media="movie" :videos="videos"/>
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