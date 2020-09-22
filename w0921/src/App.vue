<template>
  <v-app>
    
    <v-main>
      
      <!-- <router-link to="/home">home a git</router-link>
      <br>
      <router-link to="/projects">projects a git</router-link>
      <br>
      <router-link to="about">about a git</router-link> -->
      <router-view></router-view>
      <!-- <v-container>
        <Projects />
      </v-container> -->
      <Navdrawer />
    </v-main>
    
  </v-app>
</template>

<script>
// import Projects from "./components/Projects";
import Navdrawer from "./components/Navdrawer";

export default {
  name: "App",
  components: {
    // Projects,
    Navdrawer,
  },
};
</script>
