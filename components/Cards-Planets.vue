<template>
  <v-col cols="12" sm="6" md="6" lg="4" xl="3">
    <v-card class="mx-auto py-5" color="dark" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require(`@/assets/img/planets/cards/${planet.img}`)"
      >
        <v-card-title>{{ planet.title }}</v-card-title>
      </v-img>
      <v-divider class="mt-2"></v-divider>
      <v-card-subtitle class="pb-3"
        >Number planet {{ planet.num }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <p>{{ planet.text }}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <v-btn color="orange" text> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["planet"],
};
</script>

<style lang="scss">
.v-image__image {
  background-size: contain;
}
</style>