<template>
  <v-app dark>
    <div v-if="planets" class="planets-id">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="6" class="d-flexs">
            <img
              :src="require(`@/assets/img/planets/cards/${planets.img}`)"
              alt=""
              class="h-200"
            />
          </v-col>

          <v-col cols="12" sm="12" md="6">
            <h1>{{ planets.title }}</h1>
            <br />
            <p>{{ planets.text1 }}</p>
            <p>{{ planets.text2 }}</p>
            <p>{{ planets.text3 }}</p>
            <hr />
            <v-btn color="dark" @click="back">G Backward</v-btn>
            <v-btn color="dark" @click="forward">G Forward</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    planets() {
      return this.$store.getters.getPlanets(this.$route.params.id);
    },
  },
  methods: {
    back() {
      const ids = this.planets.id;
      const no = -1;
      const idNs = ids + no;
      console.log(idNs);

      if (idNs >= 1) {
        this.$router.push({ path: `/planetsId/${idNs}` });
        return;
      } else if (idNs !== 1) {
        this.$router.push({ path: "/planets" });
        return;
      }
    },
    forward() {
      const id = this.planets.id;
      const no = 1;
      const idN = id + no;
      console.log(idN);
      if (idN <= 8) {
        this.$router.push({ path: `/planetsId/${idN}` });
        return;
      } else if (idN !== 8) {
        this.$router.push({ path: "/planets" });
        return;
      }
    },
  },
};
</script>

<style lang="scss">
.planets-id {
  padding: 100px 0px;
  background: url("@/assets/img/planets/Twinkle Star-0.7s-1920px.svg?inline");
  background-size: cover;
  height: 100vh;
  .h-200 {
    width: 480px;
    max-width: 100%;
  }
  .d-flexs {
    display: flex;
    justify-content: center;
  }
}
</style>