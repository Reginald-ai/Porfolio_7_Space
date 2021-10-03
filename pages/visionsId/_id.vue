<template>
  <v-app dark>
    <div class="px90-100">
      <v-container>
        <v-row>
          <v-col>
            <img
              :src="require(`@/assets/img/mission/f-cards/${visions.img}`)"
              alt=""
            />
          </v-col>
          <v-col>
            <h1>{{ visions.title }}</h1>
            <br />
            <p>{{ visions.text }}</p>
            <h2>{{ visions.depth.title }}</h2>
            <p>{{ visions.depth.text }}</p>
            <p>{{ visions.depth.text1 }}</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  computed: {
    visions() {
      return this.$store.getters.getVisions(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss">
.px90-100 {
  padding: 100px 0px;
  background: url("@/assets/img/mission/id/Ripple-1.3s-1920px.svg?inline");
}
</style>