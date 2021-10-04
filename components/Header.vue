<template>
  <v-app-bar
    absolute
    color="white"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    class="headers"
  >
    <v-container class="d-flex">
      <v-app-bar-nav-icon class="menu-bar"></v-app-bar-nav-icon>

      <NuxtLink to="/" class="text-white">SpaceY</NuxtLink>

      <v-spacer></v-spacer>

      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink to="/Planets" class="nav-link">Planets</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/Mission" class="nav-link">Mission</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/Faq" class="nav-link">FAQ</NuxtLink>
        </li>
      </ul>
    </v-container>

    <!-- <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn> -->
  </v-app-bar>
  <!-- <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px"> </v-container>
    </v-sheet> -->
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-application .white {
  background: transparent !important;
  border-color: none !important;
}
.headers {
  position: fixed !important;
  background: transparent !important;
  color: #fff !important;
  .menu-bar {
    display: block;
    @include breakpoint-up(sm) {
      display: none;
    }
  }
  .text-white {
    text-decoration: none;
  }
  .navbar-nav {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    .nav-link {
      color: #fff;
      padding: 10px;
      text-decoration: none;
    }
  }
}
</style>