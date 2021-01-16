<template>
  <div class="footer">
      <v-app>
          <v-footer color="#EEEEEE">
            <div class="flex-grow-1"></div>
            <div>&copy; Tommy's Portfolio</div>
          </v-footer>
      </v-app>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
* {
    font-family: "Orbitron", sans-serif;
}
.footer {
    margin-top: auto;
}
</style>
