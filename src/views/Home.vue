<template>
  <div id="home">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L20,133.3C40,171,80,245,120,240C160,235,200,149,240,149.3C280,149,320,235,360,234.7C400,235,440,149,480,96C520,43,560,21,600,21.3C640,21,680,43,720,69.3C760,96,800,128,840,128C880,128,920,96,960,85.3C1000,75,1040,85,1080,90.7C1120,96,1160,96,1200,128C1240,160,1280,224,1320,245.3C1360,267,1400,245,1420,234.7L1440,224L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg> -->
    <!-- <img v-bind:src="image" /> -->
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
  created: function() {
    let that = this;
    this.interval = setInterval(function() {
    let r = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let g = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let b = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    that.rgb = '#' + r + g + b;
    }, 3000);
  },
  brforeDestroy: function() {
    clearInterval(this.interval);
  },
  data: function() {
    return {
      rgb: "#dedede"
    };
  },
  components: {
    HelloWorld
  },
  computed: {
    color: function() {
      console.log(this.rgb);
      return this.rgb; 
    }
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
#home img {
  width: 100vw;
  max-height: 700px;
}
</style>
