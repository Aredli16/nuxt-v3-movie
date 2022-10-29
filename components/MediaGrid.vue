<template>
  <div id="grid" class="row row-cols-1 row-cols-lg-4 g-4 text-center">
    <div v-for="(movie, index) in movies['results']" :key="index" class="col">
      <NuxtLink :to="{name: 'movies-id', params: {id: movie['id']}}">
        <img :src="`https://image.tmdb.org/t/p/original/${movie['poster_path']}`" alt="poster_path">
      </NuxtLink>
    </div>

    <footer class="d-flex justify-content-center mt-5">
      <nav>
        <ul class="pagination">
          <li class="page-item">
            <NuxtLink :class="[Number(currentPage) === 1? 'page-link disabled' : 'page-link']" :external="true"
                      :to="Number(currentPage) === 1 ? '' :  `${route.path}?page=${Number(currentPage) - 1}`">Précédent
            </NuxtLink>
          </li>
          <li class="page-item">
            <NuxtLink class="page-link active" to="/movies">{{ currentPage }}</NuxtLink>
          </li>
          <li class="page-item">
            <NuxtLink :external="true" :to="`${route.path}?page=${Number(currentPage) + 1}`" class="page-link">{{
                Number(currentPage) + 1
              }}
            </NuxtLink>
          </li>
          <li class="page-item">
            <NuxtLink :external="true" :to="`${route.path}?page=${Number(currentPage) + 2}`" class="page-link">
              {{ Number(currentPage) + 2 }}
            </NuxtLink>
          </li>
          <li class="page-item">
            <NuxtLink :external="true" :to="`${route.path}?page=${Number(currentPage) + 1}`" class="page-link">Suivant
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const currentPage = ref(route.query['page'] ? route.query['page'] : 1)

const props = defineProps({
  media: String,
  categorie: String
})

const {data: movies} = await useLazyFetch('/api/tmdb', {
  params: {
    media: props.media,
    categorie: props.categorie,
    page: currentPage.value
  },
  initialCache: false
})
</script>

<style lang="scss" scoped>
@import "assets/style/colors";

#grid {
  img {
    height: 35rem;
    width: 25rem;
    object-fit: cover;
    object-position: center;
  }
}
</style>