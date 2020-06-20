<template>
  <div class="works">
    <span class="head">WORKS</span>
    <v-app>
      <v-container class="mt-10 ms-auto">
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="3" lg="3" 
                  v-for="work in works" v-bind:key="work.name">
            <v-card max-width="344" :href="link" v-bind:key="link" class="card">
              <v-card-title>{{work.name}}</v-card-title>
              <v-card-text>{{work.content}}</v-card-text>
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
        {name: 'ポートフォリオ', content: "ポートフォリオです。"},
        {name: '読書管理アプリ', content: "本を何%読んだかを記録します。これもvue.jsで書き換えたい。"}
      ]
    };
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
.Works {
  margin-top: 100px;
}
</style>
