<template>
  <v-app dark class="planets">
    <div class="planets-in">
      <v-container>
        <v-row>
          <v-col
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-duration="500"
            cols="12"
          >
            <SvgStars class="w-100" />
          </v-col>
          <v-col data-aos="fade-up">
            <div class="py-5">
              <h1>What is Universe Short answer?</h1>
              <p>
                The Universe is everything we can touch, feel, sense, measure or
                detect. It includes living things, planets, stars, galaxies,
                dust clouds, light, and even time. Before the birth of the
                Universe, time, space and matter did not exist. The Universe
                contains billions of galaxies, each containing millions or
                billions of stars. The space between the stars and galaxies is
                largely empty. However, even places far from stars and planets
                contain scattered particles of dust or a few hydrogen atoms per
                cubic centimeter. Space is also filled with radiation (e.g.
                light and heat), magnetic fields and high energy particles (e.g.
                cosmic rays).
              </p>
              <p>
                The Universe is incredibly huge. It would take a modern jet
                fighter more than a million years to reach the nearest star to
                the Sun. Travelling at the speed of light (300,000 km per
                second), it would take 100,000 years to cross our Milky Way
                galaxy alone. No one knows the exact size of the Universe,
                because we cannot see the edge – if there is one. All we do know
                is that the visible Universe is at least 93 billion light years
                across. (A light year is the distance light travels in one year
                – about 9 trillion km.)
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
            data-aos="flip-right"
            data-aos-delay="250"
            data-aos-duration="500"
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
          <v-col
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="500"
            cols="12"
            md="6"
            sm="12"
          >
            <h1>Before Dawn</h1>
            <p>
              Expect a miracle. Have faith and hope. Because night is darkest
              just before dawn..and you or I do not hold the brush that colors
              the night and the day.
            </p>
            <p>
              Alignments between these two planets are rather rare, occurring
              once every 20 years or so, but this conjunction is exceptionally
              rare because of how close the planets will appear to one another,
              youd have to go all the way back to just before dawn on March 4,
              1226, to see a closer alignment between these objects visible in
              the night sky.
            </p>
          </v-col>
          <v-col data-aos="fade-left" cols="12" md="6" sm="12">
            <SvgDawn class="w-100" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="lunch">
      <v-container>
        <v-row class="align-center">
          <v-col
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="500"
            cols="12"
            sm="12"
            md="6"
          >
            <SvgFloating class="w-100" />
          </v-col>
          <v-col data-aos="fade-down" cols="12" sm="12" md="6">
            <h1>Hot-air balloon</h1>
            <p>
              A hot-air balloon is a lighter-than-air aircraft consisting of a
              bag, called an envelope, which contains heated air. Suspended
              beneath is a gondola or wicker basket (in some long-distance or
              high-altitude balloons, a capsule), which carries passengers and a
              source of heat, in most cases an open flame caused by burning
              liquid propane. The heated air inside the envelope makes it
              buoyant, since it has a lower density than the colder air outside
              the envelope.
            </p>
            <p>
              As with all aircraft, hot-air balloons cannot fly beyond the
              atmosphere. The envelope does not have to be sealed at the bottom,
              since the air inside the envelope is at about the same pressure as
              the surrounding air. In modern sport balloons the envelope is
              generally made from nylon fabric, and the inlet of the balloon
              (closest to the burner flame) is made from a fire-resistant
              material such as Nomex. Modern balloons have been made in many
              shapes, such as rocket ships and the shapes of various commercial
              products, though the traditional shape is used for most
              non-commercial and many commercial applications.
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