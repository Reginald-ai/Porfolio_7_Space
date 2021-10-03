<template>
  <v-app dark class="mission">
    <div class="tech">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" sm="6" md="6">
            <SvgLunch class="w-100" />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              voluptatum at explicabo, consequuntur nulla nostrum laborum
              ratione voluptates sint accusantium?
            </p>
            <br />
            <p>
              To discover and expand knowledge for the benefit of humanity.
              Mission: Lead an innovative and sustainable program of exploration
              with commercial and international partners to enable human
              expansion across the solar system and bring new knowledge and
              opportunities back to Earth
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="rocket">
      <v-container>
        <v-divider class="my-5"></v-divider>
        <v-row>
          <LazyCards-Mission
            v-for="(projectId, i) in visions"
            :key="i"
            :projectId="projectId"
          />
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SvgLunch from "@/assets/img/mission/undraw_teaching_f1cm.svg";

export default {
  components: {
    SvgLunch,
  },
  data() {
    return {};
  },
  computed: {
    visions() {
      return this.$store.state.visions;
    },
  },
};
</script>

<style lang="scss">
.mission {
  padding: 100px 0px;
  background: #1c2431
    url("@/assets/img/planets/symbol-scatter-haikei.svg?inline") !important;
  .tech {
    padding: 15px 0px;
  }
}
</style>

