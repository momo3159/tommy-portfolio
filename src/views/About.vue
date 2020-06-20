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
    
    <div class="btn-container">
        <div class="github-btn">
          <v-btn width="150px" height="50px" href="https://github.com/momo3159">
            <v-fa :icon="['fab', 'github']" size="lg" pull="left"></v-fa>github
          </v-btn>
        </div>
        <div class="twitter-btn">
          <v-btn width="150px" height="50px" large href="https://twitter.com/0028272826s">
            <v-fa :icon="['fab', 'twitter']" size="lg" pull="left" color="#00acee"></v-fa><span>Twitter</span>
          </v-btn>
        </div>
          <div class="atcoder-btn">
          <v-btn width="150px" height="50px" href="https://atcoder.jp/users/Tommy3">
             <v-fa icon="laptop-code" size="lg" pull="left"></v-fa>AtCoder
          </v-btn>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      info: {
        name: "川北智也",
        univ: "同志社大学理工学部\nインテリジェント情報工学科",
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
  width: 100%;
}
td {
  padding-left: 30px;
}
th,
td {
  letter-spacing: 2px;
  font-size: 20px;
}
span {
  color: #00acee;
}
.about .btn-container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.about .btn-container .github-btn, .twitter-btn, .atcoder-btn {
  padding-left: 10px;
}
@media(max-width:670px){
  th, td {
    font-size: 12px;
  }
}
</style>
