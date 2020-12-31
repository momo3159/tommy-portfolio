<template>
  <div id="about">
    <span class="head">ABOUT ME</span>
    <v-container class="mt-10">
      <v-card>
        <v-card-title class="justify-center card-title"
          >Tomoya Kawakita</v-card-title
        >
        <v-card-subtitle
          >同志社大学理工学部インテリジェント情報工学科 3回</v-card-subtitle
        >
        <v-card-text>
          Web開発・競技プログラミング・サイクリング <br />
          AtCoder: 灰 / Paiza: Sランク <br />
          tommycsth61 [at] gmail.com
        </v-card-text>
        <v-card-actions class="justify-center">
          <a href="https://github.com/momo3159">
            <v-btn icon>
              <v-fa :icon="['fab', 'github']" size="2x"></v-fa>
            </v-btn>
          </a>
          <a href="https://twitter.com/Tomm7282">
            <v-btn icon>
              <v-fa :icon="['fab', 'twitter']" size="2x"></v-fa>
            </v-btn>
          </a>
          <a href="https://atcoder.jp/users/Tommy3">
            <v-btn outlined color="grey darken-2" small rounded>
              <v-fa :icon="['fa', 'link']" size="lg"></v-fa>
              AtCoder</v-btn
            >
          </a>
          <a href="https://qiita.com/tommy3">
            <v-btn outlined color="grey darken-2" small rounded>
              <v-fa :icon="['fa', 'link']" size="lg"></v-fa>
              Qiita
            </v-btn>
          </a>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      infos: [
        { header: "Name", value: "川北智也", url: "" },
        {
          header: "univ",
          value: "同志社大学理工学部\nインテリジェント情報工学科",
          url: "",
        },
        { header: "email", value: "tommycsth61 [at] gmail.com", url: "" },
        { header: "twitter", value: "Tomm7282", url: "" },
        {
          header: "github",
          value: "momo3159",
          url: "https://github.com/momo3159",
        },
        {
          header: "AtCoder",
          value: "Tommy3",
          url: "https://atcoder.jp/users/Tommy3",
        },
        { header: "Qiita", value: "tommy3", url: "https://qiita.com/tommy3" },
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
a {
  text-decoration: none;
}
.head {
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid #304FFE;
}
.aboutTable {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  table-layout: auto;
  border-collapse: collapse;
}
#about {
  margin-top: 100px;
  width: 100%;
  height: auto;
}

.card-title {
  font-weight: bold;
  font-size: 25px;
}


@media (max-width: 670px) {
  th,
  td {
    font-size: 12px;
  }
}
</style>
