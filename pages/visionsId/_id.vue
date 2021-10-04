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
  computed: {
    visions() {
      return this.$store.getters.getVisions(this.$route.params.id);
    },
  },
  methods: {
    back() {
      const ids = this.visions.id;
      const no = -1;
      const idNs = ids + no;
      console.log(idNs);

      if (idNs >= 1) {
        this.$router.push({ path: `/visionsId/${idNs}` });
        return;
      } else if (idNs !== 1) {
        this.$router.push({ path: "/Mission" });
        return;
      }
    },
    forward() {
      const id = this.visions.id;
      const no = 1;
      const idN = id + no;
      console.log(idN);
      if (idN <= 8) {
        this.$router.push({ path: `/visionsId/${idN}` });
        return;
      } else if (idN !== 8) {
        this.$router.push({ path: "/Mission" });
        return;
      }
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