<template>
  <div id="works">
    <span class="head">WORKS</span>
    <v-container class="mt-10">
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          align="center"
          v-for="work in works"
          v-bind:key="work.link"
        >
          <v-card class="card">
            <v-card-title>{{ work.name }}</v-card-title>
            <v-card-subtitle
              >{{ work.lang }}<br />{{ work.year }}</v-card-subtitle
            >
            <v-card-text class="text-left mt-auto">{{
              work.content
            }}</v-card-text>

            <v-card-actions>
              <v-btn
                v-for="link in work.links"
                :key="link.url"
                :href="link.url"
                text
                color="deep-purple accent-4"
              >
                <v-fa :icon="['fab', link.name]" size="lg" pull="left"></v-fa
                >{{link.name}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Works",
  data: function () {
    return {
      works: [
        {
          name: "ポートフォリオ",
          lang: "HTML/CSS/Vue.js",
          content:
            "ポートフォリオです。フロントエンドに（ほぼ）初挑戦で作りました。SPA対応などに挑戦しました。",
          links: [
            {
              url: "https://github.com/momo3159/tommy-portfolio",
              name: "github",
            },
          ],
        },
        {
          name: "読書管理アプリ",
          lang: "HTML/CSS/JavaScript",
          content:
            "google books apiを用いました。本を何%読んだかを記録します。これもvue.jsで書き換えたいと思っています。",
          links: [
            {
              url: "https://github.com/momo3159/Reading-Progress-Management.io",
              name: "github",
            },
          ],
        },
        {
          name: "テトリス",
          lang: "Java/JavaFx",
          content: "テトリスを自作しました。",
          links: [
            { url: "https://github.com/momo3159/BlockGame", name: "github" },
          ],
        },
        {
          name: "BETTeR-class",
          lang: "HTML/CSS/Vue.js",
          content:
            "e-classから課題の情報を取得し、管理するChrome拡張を作りました。",
          links: [
            { url: "https://github.com/momo3159/BETTeR-class", name: "github" },
            {
              url:
                "https://chrome.google.com/webstore/detail/better-class/nnpcnagpahjgfimobmehmijldibkdpan?hl=ja",
              name: "chrome",
            },
          ],
        },
      ],
    };
  },
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
  border-bottom: 3px solid #304ffe;
}
.card {
  margin: 5px;
  max-width: 700px;
}
#works {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  height: auto;
}
</style>
