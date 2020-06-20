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
      <v-row>
        <v-col cols="12">
          <v-btn class="mx-2" fab large color="white" href="https://github.com/momo3159">
            <v-fa :icon="['fab', 'github']"></v-fa>
          </v-btn>
          <v-btn class="mx-2" fab large color="#4FC3F7" href="https://twitter.com/0028272826s">
            <v-fa :icon="['fab', 'twitter']"></v-fa>
          </v-btn>
          <v-btn class="mx-2" fab large color="cyan" href="https://atcoder.jp/users/Tommy3">
             <v-fa icon="laptop-code"></v-fa>
          </v-btn>
        </v-col>
      </v-row>
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
        email: "tommycsth61 [at] gmail.com",
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
