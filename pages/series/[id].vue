<template>
  <div class="mt-3">
    <MediaInformation :credits="credits" :media="serie" :videos="videos"/>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const {data: serie} = await useFetch('/api/tmdb', {
  params: {
    media: "tv",
    categorie: route.params.id
  },
  initialCache: false
})


const {data: credits} = await useFetch('/api/tmdb', {
  params: {
    media: "tv",
    categorie: route.params.id,
    optional: "credits"
  },
  initialCache: false
})

const {data: videos} = await useFetch('/api/tmdb', {
  params: {
    media: "tv",
    categorie: route.params.id,
    optional: "videos"
  },
  initialCache: false
})
</script>

