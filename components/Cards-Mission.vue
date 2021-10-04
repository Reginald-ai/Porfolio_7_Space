<template>
  <v-col cols="12" sm="6" md="6" lg="4" xl="3">
    <v-card class="mx-auto py-5" color="dark" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require(`@/assets/img/mission/f-cards/${projectId.img}`)"
      >
      </v-img>
      <v-card-title>{{ projectId.title }}</v-card-title>
      <v-divider class="mt-2"></v-divider>
      <v-card-subtitle class="pb-3"
        >Year: {{ projectId.year }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <p>{{ projectId.text.slice(0, 130) }} . . .</p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <NuxtLink
          :to="`/visionsId/${projectId.id}`"
          class="btn-yellow"
          color="orange"
          text
        >
          Explore
        </NuxtLink>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["projectId"],
};
</script>

<style>
</style>