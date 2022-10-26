<template>
  <header>
    <nav class="navbar navbar-dark">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          Nuxt<span>Movie</span>
        </NuxtLink>
        <form>
          <input class="form-control rounded-5 placeholder-wave" placeholder="Rechercher" type="text">
        </form>
      </div>
      <div class="sidebar position-fixed d-flex flex-column gap-5 ">
        <NuxtLink class="nav-link" to="/">
          <Icon name="material-symbols:home-rounded" size="50"></Icon>
          <span class="nav-link-title">Accueil</span>
        </NuxtLink>
        <NuxtLink class="nav-link" to="/movies">
          <Icon name="ic:baseline-local-movies" size="50"></Icon>
          <span class="nav-link-title">Films</span>
        </NuxtLink>
        <NuxtLink class="nav-link" to="/series">
          <Icon name="material-symbols:live-tv-outline" size="50"></Icon>
          <span class="nav-link-title">Series</span>
        </NuxtLink>
      </div>
    </nav>
  </header>
  <NuxtPage/>

  <footer>

  </footer>
</template>

<style lang="scss" scoped>
@import "assets/style/colors";

.navbar-brand {
  font-size: 29px;

  span {
    color: $red;
  }
}

.sidebar {
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  color: #a3a3a3;

  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      color: #e7e7e7;
      transition: all 300ms linear;
      transform: scale(1.1);
    }
  }
}

.router-link-active {
  color: white;
  transform: scale(1.1);
}
</style>