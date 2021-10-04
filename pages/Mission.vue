<template>
  <v-app dark class="mission">
    <div class="tech">
      <v-container>
        <v-row class="align-center">
          <v-col
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="500"
            cols="12"
            sm="12"
            md="6"
          >
            <SvgLunch class="w-100" />
          </v-col>
          <v-col data-aos="fade-down" cols="12" sm="12" md="6">
            <h1>Teaching Philosophy Statement</h1>
            <p>
              Like many teachers around the nation, I recently went from
              face-to-face teaching to online teaching with little time to prep.
              I first tried to emulate my normal daily procedures virtually—I
              thought the consistency and familiarity would be beneficial.
            </p>
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
            data-aos="flip-right"
            data-aos-duration="800"
            v-for="(projectId, i) in visions"
            :key="i"
            :projectId="projectId"
          />
        </v-row>
        <v-divider class="my-5"></v-divider>
      </v-container>
    </div>
    <div class="working">
      <v-container>
        <v-row class="align-center">
          <v-col data-aos="fade-left" sm="12" md="6">
            <h1>Hard Working Till Late Night</h1>
            <p>
              Who here has worked a late night? How about an overnighter? I know
              100% I have multiple times. There’s something about working by
              lamplight that just gets you focused and puts you in work mode.
              Grabbing that midnight brew and working until your eyes blur over
              from focusing on something for so long, telling off the 9–5
              mindset and just getting stuff done.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda eaque ullam hic dolore? Provident, adipisci culpa eos
              optio explicabo dicta?
            </p>
          </v-col>
          <v-col data-aos="fade" data-aos-duration="800" sm="12" md="6">
            <SvgWorking class="w-100" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="C-working pt-16">
      <v-container>
        <v-row class="align-center">
          <v-col data-aos="fade" data-aos-duration="800" sm="12" md="6">
            <SvgCoWorking class="w-100" />
          </v-col>
          <v-col data-aos="fade-left" sm="12" md="6">
            <h1>Information and Communication Technology</h1>
            <p>
              Communication technology is the transfer of messages (information)
              among people and/or machines through the use of technology. This
              processing of information can help people make decisions, solve
              problems, and control machines. NCTE 4 Use written language to
              communicate effectively.
            </p>
            <p>
              Careers in communication technology require the knowledge to
              operate, maintain, and upgrade communications equipment.
              Individuals within the computer technology field must have an
              understanding of wireless technologies.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SvgWorking from "@/assets/img/mission/undraw_Working_late_re_0c3y.svg";
import SvgCoWorking from "@/assets/img/mission/undraw_Co-working_re_w93t.svg";
import SvgLunch from "@/assets/img/mission/undraw_teaching_f1cm.svg";

export default {
  components: {
    SvgLunch,
    SvgWorking,
    SvgCoWorking,
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

