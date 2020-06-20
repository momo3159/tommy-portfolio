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
    <router-view />
  </div>
</template>

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
  padding: 30px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  padding-bottom: 0;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: blue;
  display: inline-block;
  width: 20%;
}

#nav a.router-link-exact-active {
  color: orange;
}

@media (max-width: 670px) {
  #nav a {
    padding-bottom: 10px;
    width: 50%;
  }
}
</style>
