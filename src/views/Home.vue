<template>
  <div id="home">
          <span class="hello">Welcome to Tommy's Portfolio</span> 
    <div class="particle-container">

      <vue-particles 
          class="particle"
          color="#1E88E5"
          :particleOpacity="0.9"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="20"
          linesColor="#FF8F00"
          :linesWidth="3"
          :lineLinked="true"
          :lineOpacity="0.7"
          :linesDistance="150"
          :moveSpeed="7"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="repulse"
      ></vue-particles>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: function() {
    return {
      rgb: "#dedede"
    };
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
.particle{
  height: 100vh;
  width: 100vw;
}
#home span {
  position: relative;
  top: 50vh;
  margin: 0 auto;
  font-weight: bold;
  font-size: 60px;
  color: #D84315;
}
@media(max-width: 670px){
  .particle{
  height: 100vh;
  width: 100vw;
}
#home span {
  position: relative;
  top: 50vh;
  margin: 0 auto;
  font-weight: bold;
  font-size: 40px;
  color: #D84315;
}
}
</style>
