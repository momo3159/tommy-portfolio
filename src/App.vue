<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/history">History</router-link>
      <router-link to="/works">Works</router-link>
      <a></a>
    </div>
    <!-- <router-view /> -->
    <home></home>
    <about></about>
    <skills></skills>
    <history></history>
    <works></works>
  </div>
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
  color: #2c3e50;
}

#nav {
  height: 80px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  padding-bottom: 0;
  width: 100%;
  background-color: #eeeeee;
  position: fixed;
  top: 0px;
  z-index: 10;
}

#nav a {
  font-weight: bold;
  color: #1e88e5;
  display: block;
  width: 20%;
  float: left;
  line-height: 80px;
}

#nav a.router-link-exact-active {
  color: #ff8f00;
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
