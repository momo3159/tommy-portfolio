<template>
  <div id="home">
    <img v-bind:src="image" />
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
      that.current = (that.current + 1) % that.imgData.length;
    }, 3000);
  },
  brforeDestroy: function() {
    clearInterval(this.interval);
  },
  data: function() {
    return {
      imgData: [
        require("../assets/kyoto.jpg"),
        require("../assets/osaka.jpg"),
        require("../assets/tokyo.jpg")
      ],
      current: 0
    };
  },
  components: {
    HelloWorld
  },
  computed: {
    image: function() {
      console.log(this.imgData[this.current]);
      return this.imgData[this.current];
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
#home {
  font-family: "Orbitron", sans-serif;
  margin-top: 100px;
}
</style>
