<template>
  <div id="home">
    <vue-particles 
        color="#1E88E5"
        :particleOpacity="0.9"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="20"
        linesColor="#FF8F00"
        :linesWidth="3"
        :lineLinked="true"
        :lineOpacity="0.7"
        :linesDistance="200"
        :moveSpeed="7"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
        v-on:click="onclick"
    >
    </vue-particles>
    <HelloWorld msg="Welcome to Tommy's Portfolio"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data: function() {
    return {
      rgb: "#dedede"
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    onclick: function(){
      return this.rgb;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
#home {
  font-family: "Orbitron", sans-serif;
  margin-top: 0px;
}
</style>
