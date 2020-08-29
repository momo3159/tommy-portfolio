<template>
  <div class="works">
    <span class="head">WORKS</span>
    <v-app>
      <v-container class="mt-10">
        <v-row>
          <v-col 
            cols="12" xs="12" sm="6" md="4" lg="4" align="center"
            v-for="work in works" v-bind:key="work.link"
          >
            <v-card width="500" class="card">
              <v-card-title>{{work.name}}</v-card-title>
              <v-card-subtitle>{{work.lang}}<br>{{work.year}}</v-card-subtitle>
              <v-card-text class="text-left mt-auto">{{work.content}}</v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  :href="work.link"
                >
                  <v-fa :icon="['fab', 'github']" size="lg" pull="left"></v-fa>github
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Works",
  data: function() {
    return {
      works: [
        {name: 'ポートフォリオ', lang:"HTML/CSS/vue.js", content:"ポートフォリオです。フロントエンドに（ほぼ）初挑戦で作りました。SPA対応などに挑戦しました。", link:"https://github.com/momo3159/tommy-portfolio"},
        {name: '読書管理アプリ', lang:"HTML/CSS/JavaScript", content: "google books apiを用いました。本を何%読んだかを記録します。これもvue.jsで書き換えたいと思っています。", link:"https://github.com/momo3159/Reading-Progress-Management.io"},
        {name: 'テトリス', lang: "Java/JavaFx", content: "テトリスを自作しました。", link: "https://github.com/momo3159/BlockGame"}, 
      ]
    };
  },
  mounted: function(){
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_API_BASE_URL);
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
* {
  font-family: "Orbitron", sans-serif;
}
.head {
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid;
}
.card {
  margin: 5px;
  transition: all 0.7s;
}
.works {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
</style>
