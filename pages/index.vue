<template>
  <div class="i-wrapper">
    <div class="section-index">
      <v-container>
        <v-row>
          <v-col
            data-aos="fade-right"
            class="text-white"
            cols="12"
            sm="12"
            md="6"
          >
            <h2 class="pb-5">Explore the Universe</h2>
            <p class="pb-5">
              What is the Universe like? Our answer to that question has
              changed—sometimes suddenly and dramatically—as our tools for
              studying the Universe have changed. Explore the Universe shows how
              our ideas about the Universe evolved as we developed new
              astronomical instruments.
            </p>
            <p>
              It presents the Universe as discerned by the naked eye, then shows
              how the telescope, photography, spectroscopy, and digital
              technology revolutionized our view. The largest section describes
              what astronomers today think about the nature of the Universe.
            </p>
          </v-col>

          <v-col
            data-aos="fade-down"
            data-aos-delay="250"
            cols="12"
            sm="12"
            md="6"
          >
            <AstroSvg class="w-100" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="follow-us">
      <v-container>
        <h1 class="py-5" style="text-align: center">
          Let's Collaborate first before exploring space
        </h1>
        <hr class="my-5" />
        <v-row class="align-center">
          <v-col data-aos="fade-right" data-aos-delay="500" cols="12" md="6">
            <SvgWorld class="w-100 h-500" />
          </v-col>
          <v-col data-aos="fade-left" cols="12" md="6">
            <h1>International Cooperation</h1>
            <br />
            <p>
              The International Space Station (ISS) Program’s greatest
              accomplishment is as much a human achievement as it is a
              technological one—how best to plan, coordinate, and monitor the
              varied activities of the Program’s many organizations. An
              international partnership of space agencies provides and operates
              the elements of the ISS. The principals are the space agencies of
              the United States, Russia, Europe, Japan, and Canada. The ISS has
              been the most politically complex space exploration program ever
              undertaken.
            </p>
            <br />
            <p>
              The International Space Station Program brings together
              international flight crews, multiple launch vehicles, globally
              distributed launch, operations, training, engineering, and
              development facilities; communications networks, and the
              international scientific research community.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="rocket-space">
      <v-container>
        <v-row class="align-center">
          <v-col data-aos="fade-left" cols="12" md="6">
            <h1>Depth Perception in Space</h1>
            <br />
            <p>
              This artist's concept shows how astronomers use the unique orbit
              of NASA's Spitzer Space Telescope and a depth-perceiving trick
              called parallax to determine the distance of dark planets, black
              holes, and failed stars which lurk invisibly among us. These
              objects do not produce light, and are too faint to detect from
              Earth.
            </p>
            <br />
            <p>
              However, astronomers can deduce their presence from the way they
              affect the light from background objects. When such a dark body
              passes in front of a bright star, its gravity warps the path of
              the star's light and causes it to brighten this process is called
              gravitational microlensing.
            </p>
          </v-col>
          <v-col data-aos="fade-right" cols="12" md="6">
            <SvgRocket class="w-100 h-500 mt-5" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import AstroSvg from "@/assets/img/index/undraw_Astronaut_re_8c33.svg";
import SvgWorld from "@/assets/img/index/undraw_connected_world_wuay.svg";
import SvgRocket from "@/assets/img/index/undraw_Outer_space_re_u9vd.svg";
export default {
  components: {
    AstroSvg,
    SvgWorld,
    SvgRocket,
  },
};
</script>

<style lang="scss">
.i-wrapper {
  .section-index {
    padding: 100px 0px;
    height: 100%;
    width: 100%;
    background: #1c2431 url("@/assets/img/stars/bg-desktop.svg?inline")
      no-repeat;
    background-position: initial;

    @include breakpoint-up(medium) {
      padding: 150px 0px;
    }
    .row {
      align-items: center;
    }
  }
  .follow-us {
    background: #1c2431;
  }
  .rocket-space {
    background: #1c2431;
  }
}
</style>
