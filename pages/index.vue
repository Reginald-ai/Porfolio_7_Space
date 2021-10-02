<template>
  <div class="i-wrapper">
    <div class="section-index">
      <v-container>
        <v-row>
          <v-col class="text-white" cols="12" sm="12" md="6">
            <h2 class="pb-5">Explore My Universe</h2>
            <p class="pb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corporis, expedita ad. Quidem voluptatum nobis officiis, provident
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              magni harum quibusdam autem saepe, quisquam nostrum incidunt
              dolores illum, eligendi maiores? Dignissimos quia, provident
              tempora veritatis beatae quos molestiae doloremque.
            </p>
          </v-col>

          <v-col cols="12" sm="12" md="6">
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
        <hr />
        <v-row class="align-center">
          <v-col cols="12" md="6">
            <SvgWorld class="w-100" />
          </v-col>
          <v-col cols="12" md="6">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus neque officia praesentium quae dolores, quia dolorem
              modi dolore quisquam quis a numquam accusantium repudiandae
              eveniet corporis sapiente rerum dolorum mollitia facere? Accusamus
              maiores quibusdam dicta at asperiores fugiat maxime vel laudantium
              nulla repellat debitis omnis, commodi velit incidunt a saepe
              ducimus cum et optio magnam? A neque maxime ipsa hic?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              dolores earum maiores quod! Illo inventore ducimus neque ipsum id
              suscipit doloremque laboriosam necessitatibus quasi incidunt
              architecto at numquam, obcaecati dolor.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="rocket-space">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" md="6">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus neque officia praesentium quae dolores, quia dolorem
              modi dolore quisquam quis a numquam accusantium repudiandae
              eveniet corporis sapiente rerum dolorum mollitia facere? Accusamus
              maiores quibusdam dicta at asperiores fugiat maxime vel laudantium
              nulla repellat debitis omnis, commodi velit incidunt a saepe
              ducimus cum et optio magnam? A neque maxime ipsa hic?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              dolores earum maiores quod! Illo inventore ducimus neque ipsum id
              suscipit doloremque laboriosam necessitatibus quasi incidunt
              architecto at numquam, obcaecati dolor.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <SvgRocket class="w-100" />
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
