<template>
  <v-container>
    <div class="ml-5">
      <h1 class="home__title">
        Hi,<br />I'am <span class="home__title-color">kebele</span><br />
        <!-- <span class="txt-type" data-wait="3000" data-words='["developer", "designer", "game changer"]'></span> -->

        <span style="color : crimson; font-size: 24px">I know a little bit</span
        ><br />
        <!-- <span style="color:white">.</span> -->
        <span style="color : green;">{</span>
        <span
          class="txt-type"
          data-wait="1000"
          data-words='["html + css", "javascript", "react + vue", "node + express", "mongoDB", "D3 + p5"]'
        ></span>
        <span style="color : green;">}</span>
      </h1>
    </div>
  </v-container>
</template>

<script>
import typewriter from "../assets/js/typewriter";
export default {
  mounted() {
    typewriter;
  },
};
</script>

<style scoped>
div {
  /* background-color : salmon; */
  height: 100vh;
}
</style>
