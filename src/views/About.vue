<template>
  <div class="about">
    <h1 class="head">ABOUT ME</h1>
    <v-container>
      <table class="aboutTable">
        <tr v-for="(value, key) in info" v-bind:key="key">
          <v-row class="mt-4">
            <th>{{ key }}</th>
            <td>{{ value }}</td>
          </v-row>
        </tr>
      </table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      info: {
        name: "川北智也",
        univ: "同志社大学理工学部インテリジェント情報工学科",
        email: "tommycsth61 [at] gmail.com"
      }
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
.head {
  margin-bottom: 30px;
  font-size: 40px;
}
.aboutTable {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
.about {
  margin-top: 100px;
}
td {
  padding-left: 30px;
}
th,
td {
  letter-spacing: 2px;
  font-size: 20px;
}
</style>
