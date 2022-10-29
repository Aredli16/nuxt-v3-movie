<template>
  <div class="row">
    <div class="col-md-3">
      <div class="position-sticky d-flex flex-column align-items-center" style="top: 2rem">
        <h1 class="nav">Categories</h1>
        <nav class="navbar navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/movies">Les plus populaires</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/movies/top-rated">Les mieux notés</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/movies/now-playing">Les dernières sorties</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/movies/upcoming">A venir</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="col-md-9">
      <slot/>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "assets/style/colors";

.nav-link {
  transition: all 200ms;

  &:hover {
    color: rgb(236, 103, 111);
    transform: scale(1.1);
  }
}

.router-link-active {
  color: $red;
  transform: scale(1.1);
}
</style>