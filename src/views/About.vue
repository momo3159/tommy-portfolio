<template>
  <div class="about">
    <span class="head">ABOUT ME</span>
    <v-app>
    <v-container class="mt-10">
      <table class="aboutTable">
        <tbody>
          <tr v-for="(value, key) in info" v-bind:key="key">
            <th>{{ key }}</th>
            <td>{{ value }}</td>
        </tr>
        <tr>
          <th>interest</th>
          <td><v-treeview dense :items="items"></v-treeview></td>
        </tr>
        </tbody>
      </table>
    </v-container>
    <div class="btn-container">
          <a href="https://github.com/momo3159" class="github">
          <v-fa :icon="['fab', 'github']" size="lg"></v-fa><span class="github-t">github</span></a>
          <a href="https://twitter.com/0028272826s" class="twitter">
          <v-fa :icon="['fab', 'twitter']" size="lg"></v-fa><span class="twitter-t">twitter</span></a>
          <a href="https://atcoder.jp/users/Tommy3" class="atcoder">
          <v-fa icon="laptop-code" size="lg"></v-fa><span class="atcoder-t">atcoder</span></a>
    </div>

      </v-app>
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
        hobby: "競技プログラミング/サイクリング"
      },
      items: [
        {
        id: 1,
        name: "math:",
        children:[
          { id: 2, name: "数理統計学" },
            { id: 3, name: '線形代数' },
            { id: 4, name: 'グラフ理論' }
        ],
        },
        {
        id:5,
        name: "computer science:",
        children:[
          { id: 6, name: "アルゴリズム" },
          { id: 7, name: "コンパイラ" },
          { id: 8, name: "機械学習" },
        ]
        },
        {
          id:8,
          name: "type of job:",
          children:[
            { id: 6, name: "Webエンジニア" },
            { id: 7, name: "データサイエンティスト" },
          ]
        }
        
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
*{
  font-family: "Orbitron", sans-serif;
}
.head {
    font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid;
}
.aboutTable {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  table-layout: auto;
  border-collapse: collapse;
}
.about {
  margin-top: 100px;
  width: 100%;
}
th {
  padding-left: 5px;
}
td {
  padding-left: 30px;
  
}
th, td {
  letter-spacing: 2px;
  font-size: 20px;
  text-align: left;
  border-bottom: 1px solid lightgrey;
  color: #2c3e50;
  
}

.about .btn-container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.github, .twitter, .atcoder {
  margin-right: 10px;
  background-color: #EEEEEE;
  height: 50px;
  line-height: 50px;
  width: 200px;
  border-radius: 5px;
  box-shadow: 0 5px gray;
}
.github:active, .twitter:active, .atcoder:active {
  box-shadow: none;
  position: relative;
  top: 5px;
}
.twitter {
  color: #00acee
}
.github, .atcoder{
  color: #171515
}
.github-t, .twitter-t, .atcoder-t {
  padding-left: 5px;
}
@media(max-width:670px){
  th, td {
    font-size: 12px;
  }
  .btn-container {
    flex-direction: column;
      
  }
  .github, .twitter, .atcoder{
    margin: 10px auto;

  }
}
</style>
