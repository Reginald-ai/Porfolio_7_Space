<template>
  <v-app dark class="planets">
    <div class="planets-in">
      <v-container>
        <v-row>
          <v-col cols="12">
            <SvgStars class="w-100" />
            <div class="py-5">
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam vitae doloribus magnam, labore natus suscipit beatae
                sequi consequuntur voluptatibus praesentium sunt corporis at
                possimus ratione nisi similique optio qui perferendis esse iure
                expedita laborum! Amet corporis dolorum culpa vel deleniti iure
                laboriosam, voluptatem rem porro hic vero libero! Officiis
                aliquam pariatur nostrum ullam repudiandae reprehenderit atque
                quis maiores blanditiis? Alias.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="planets-cards">
      <v-container>
        <v-divider class="my-5"></v-divider>
        <v-row>
          <Cards-Planets
            v-for="(planet, i) in planets"
            :key="i"
            :planet="planet"
          />
        </v-row>
      </v-container>
    </div>
    <div class="below-dawn">
      <v-container>
        <v-divider></v-divider>
        <v-row class="align-center">
          <v-col cols="12" md="6" sm="6">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              aliquam animi aspernatur, tenetur laudantium quas debitis repellat
              quo magnam? Repudiandae quaerat, ullam cum vitae itaque natus
              nihil aliquam magni veritatis?
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda eaque ullam hic dolore? Provident, adipisci culpa eos
              optio explicabo dicta?
            </p>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <SvgDawn class="w-100" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="lunch">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" sm="6" md="6">
            <SvgFloating class="w-100" />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              aliquam animi aspernatur, tenetur laudantium quas debitis repellat
              quo magnam? Repudiandae quaerat, ullam cum vitae itaque natus
              nihil aliquam magni veritatis?
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda eaque ullam hic dolore? Provident, adipisci culpa eos
              optio explicabo dicta?
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SvgStars from "@/assets/img/planets/undraw_stars_re_6je7.svg";
import SvgDawn from "@/assets/img/planets/undraw_Before_dawn_re_hp4m.svg";
import SvgFloating from "@/assets/img/planets/undraw_Floating_re_xtcj.svg";
export default {
  components: {
    SvgStars,
    SvgDawn,
    SvgFloating,
  },
  data() {
    return {};
  },
  computed: {
    planets() {
      return this.$store.state.planets;
    },
  },
};
</script>

<style lang="scss">
.planets {
  background: #1c2431
    url("@/assets/img/planets/symbol-scatter-haikei.svg?inline") !important;
  .planets-in {
    padding: 80px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>