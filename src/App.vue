<template>
  <v-app>
    <div id="nav">
      <router-link to="/" v-scroll-to="'#home'">Home</router-link>
      <router-link to="/about" v-scroll-to="'#about'">About</router-link>
      <router-link to="/skills" v-scroll-to="'#skills'">Skills</router-link>
      <router-link to="/history" v-scroll-to="'#history'">History</router-link>
      <router-link to="/works" v-scroll-to="'#works'">Works</router-link>
      <a></a>
    </div>
    <!-- <router-view /> -->
    <home></home>
    <about></about>
    <skills></skills>
    <history></history>
    <works></works>
  </v-app>
</template>

<script>
import About from "./views/About.vue";
import History from "./views/History.vue";
import Home from "./views/Home.vue";
import Skills from "./views/Skills.vue";
import Works from "./views/Works.vue";
export default {
  components: { About, Skills, Works, History, Home },
  name: "App",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");

#app {
  font-family: "Orbitron", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212121;
}

#nav {
  height: 50px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  padding-bottom: 0;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  top: 0px;
  z-index: 10;
}

#nav a {
  font-weight: bold;
  color: #304FFE;
  display: block;
  width: 20%;
  float: left;
  line-height: 50px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #6200EA;
}

#nav a:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

@media (max-width: 670px) {
  #nav {
    height: 90px;
  }
  #nav a {
    width: 50%;
    line-height: 30px;
  }
}
</style>
