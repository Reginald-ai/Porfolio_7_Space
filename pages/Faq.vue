<template>
  <v-app dark>
    <div class="faq">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <h1>Thank you Messages</h1>
            <p>
              I will forever be grateful to you for your help. Thank you! Some
              people deserve more than just a thank you. Just like you! Thanks
              for everything. Thanking you from the core of my heart. I truly
              appreciate you. My heart is overflowing with gratitude. Thanks
              from the bottom of my heart!
            </p>
            <p>
              I appreciate everything you do for me with so much care. Thank
              you! Your thoughtfulness always touches my heart. Thanks a ton for
              everything! Kindness is just what you do, and you do it so well!
              Thank You! Thank you won’t be enough for what you’ve done for me.
              But, let me try a little. Thanks a lot for your support!
            </p>
          </v-col>
          <v-col>
            <!-- <SvgQuestion class="w-100" /> -->
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="faq-inner">
      <v-container>
        <h1>FAQs | NASA</h1>
        <hr class="my-5" />
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <v-expansion-panels class="mb-6">
              <v-expansion-panel
                v-for="(item, i) in items.slice(0, 8)"
                :key="i"
              >
                <v-expansion-panel-header expand-icon="mdi-menu-down">
                  {{ item.q }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>{{
                  item.a
                }}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-expansion-panels class="mb-6">
              <v-expansion-panel
                v-for="(item, i) in items.slice(8, 15)"
                :key="i"
              >
                <v-expansion-panel-header expand-icon="mdi-menu-down">
                  {{ item.q }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>{{
                  item.a
                }}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="credits">
      <v-container>
        <h1>Credits Libraries I Use</h1>
        <hr class="my-5" />

        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="6"
            v-for="(credit, i) in credits"
            :key="i"
          >
            <v-card elevation="2" outlined shaped>
              <v-card-title>
                {{ credit.title }}
              </v-card-title>
              <v-card-subtitle>
                <p>{{ credit.category }}</p>
              </v-card-subtitle>
              <v-card-text>
                {{ credit.text }}
              </v-card-text>
              <v-card-text>
                {{ credit.text1 }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SvgQuestion from "@/assets/img/faq/undraw_Questions_re_1fy7.svg";
export default {
  components: {
    SvgQuestion,
  },
  data() {
    return {
      items: [
        {
          q: "What is “NASA Solve”?",
          a: "Before the NASA Solve website was established, there was no “one-stop-shop” for listing all of the opportunities available to the public to participate in NASA science and technology activities. NASA Solve is a location on the NASA website where individual members of the public can find these opportunities. NASA Solve is an invitation to members of the public to advance research, solve problems, and potentially win prizes as a result of their work.",
        },
        {
          q: "Why does NASA want the public’s participation?",
          a: " NASA has historically sought solutions to challenging research questions and engineering problems by looking within the ranks of its own workforce, the U.S. aerospace industry, academic institutions, and certain other non-governmental organizations.  We continue that practice today.  But we also recognize that NASA’s work in space and aeronautics continues to be of great interest to the worldwide public and that good ideas can come from anywhere.  NASA Solve provides a way for NASA to engage the public’s interest and ingenuity and make space exploration and other avenues of NASA research an endeavor of and by people everywhere.",
        },
        {
          q: "Who can participate in the opportunities listed on NASA Solve?   How do I know what opportunities are right for me?",
          a: "NASA Solve is intended as NASA’s gateway to involving more people in the exciting work NASA does in space exploration and aeronautics and Earth science research.  The opportunities listed here are intended to attract individuals with a range of interests and skills across a wide age range.  Read the descriptions of the projects carefully to determine if the project is a good fit for you or your organization. Eligibility requirements for individual challenge and prize activities are listed on their respective websites, which you can reach through NASA Solve.  Note that NASA is prohibited by law from awarding prize funding to entities outside of the United States.",
        },
        {
          q: " Are the opportunities on NASA Solve suitable for children and school groups?",
          a: "NASA is committed to providing students with hands-on science, technology, engineering, and mathematics (STEM) learning opportunities.  We also seek students’ contributions to helping us address real-world research and technology development needs.  You can find opportunities suitable for children and school groups under the “student opportunities” tab on the main NASA Solve page.",
        },
        {
          q: " Can I get paid for participating in the opportunities listed on NASA Solve?",
          a: "NASA has authority from Congress to develop prize competitions in relation to its scientific activities and technology development needs and to award cash prizes for winners.  Please review the webpages of the prize competitions that interest you to determine whether and what prize purses may be available and the criteria which NASA will apply to awarding such prizes.",
        },
        {
          q: "What kinds of participatory opportunities are housed on NASA Solve?",
          a: "Specific projects listed on this site include crowdsourced challenges and prize competitions, citizen science projects; competitions aimed at advancing student education, and many more activities.",
        },
        {
          q: " How does NASA define crowdsourcing?",
          a: "According to NASA Policy Directive 1090.1, crowdsourcing solicits products, services, ideas, or content contributions from many people, usually (but not necessarily) through the Internet and may result in the making of award(s). Crowdsourcing is different from ordinary outsourcing because a task or problem is outsourced to an undefined public rather than to a specific, named group or individual.",
        },
        {
          q: " How does NASA define a challenge activity?",
          a: "According to NASA Policy Directive 1090.1, challenges use a focused problem-statement approach to obtain solutions and/or stimulate innovation from a broad, sometimes undefined, public rather than a specific, named group or individual.",
        },
        {
          q: "How does NASA define a prize competition?",
          a: " According to NASA Policy Directive 1090.1, prize competitions competitively award prizes to stimulate innovation in a manner that has the potential to advance the mission of NASA.",
        },
        {
          q: "How does NASA define citizen science?",
          a: "NASA uses the definition of citizen science which appears on the U.S. Government’s central citizen science website, www.citizenscience.gov This definition takes citizen science to be activities in which the public participates voluntarily in the scientific process, addressing real-world problems in ways that may include formulating research questions, conducting scientific experiments, collecting and analyzing data, interpreting results, making new discoveries, developing technologies and applications, and solving complex problems.",
        },
        {
          q: "An opportunity in which I was interested is no longer posted on NASA Solve!  Why not? ",
          a: "How long an opportunity remains posted on NASA Solve depends on the activity’s duration.  Some of our projects remain active for years, e.g., when scientists have a great deal of spacecraft data available for the public to help analyze.  Challenge and prize competitions often have specific close dates and consider only the entries they receive prior to then.  The close dates are posted for each of the opportunities listed on NASA Solve, so please check carefully those that interest you.",
        },
        {
          q: "Is there a way to get notified when new opportunities to participate with NASA become available?",
          a: "New opportunities are created regularly, so please check NASA Solve often!  Also, please follow us on Twitter at @NASASolve as we often announce new opportunities that way, too.",
        },
        {
          q: "My organization runs a participatory activity.  Can I list in on NASA Solve?",
          a: "NASA only posts opportunities where NASA has a formal funding or partnering role with the activity. If you believe your activity meets this criterion, please contact us. ",
        },
        {
          q: "I’m a federal employee and I have an idea for a challenge or prize competition that I would like to run. Who do I contact?",
          a: "We’d love to help you run your first challenge. Please reach out to us and we’ll help to get you started.  NASA’s Center of Excellence for Collaborative Innovation (CoECI) is available to assist federal agencies with designing their own challenges and prize competitions. Please visit COECI’s webpage (www.nasa.gov/coeci) or email CoECI for more information.",
        },
        {
          q: " I love the opportunities available on NASA Solve so much that I would like to start a career in NASA research and technology development!  How do I get a job with NASA?",
          a: "While NASA Solve invites members of the public to participate voluntarily in research tasks or technology development opportunities, we recognize you may be looking to do even more with NASA.  Please check USAJobs.gov regularly for NASA job opportunities.",
        },
      ],
      credits: [
        {
          title: "Vuetify",
          category: "Vue UI Library",
          text: "Material Design Framework Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.",
        },
        {
          title: "Undraw.co / Svgrepo.com",
          category: " Images ",
          text: "Browse 300.000+ SVG Vectors and Icons Explore, search and find the best fitting icons or vectors for your projects using wide variety vector library. Download free SVG Vectors for commercial use.",
          text1:
            "Create better designed websites, products and applications. Browse to find the images that fit your messaging, automagically customise the color to match your brand and use it as a normal image, embedded code or directly in your design workflow.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.faq {
  padding: 100px 0px;
  background: url("@/assets/img/faq/Photon-10s-1920px.svg?inline");
}
.faq-inner {
  padding: 50px 0px;
  background: url("@/assets/img/faq/Rain-10s-1920px.svg?inline");
}
.credits {
  padding: 100px 0px;
  background: url("@/assets/img/faq/Rain-10s-1920px.svg?inline");
}
</style>