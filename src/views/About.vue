<template>
  <div id="about">
    <span class="head">ABOUT ME</span>
    <v-container class="mt-10">
      <v-row justify="center">
        <v-col align="center">
          <v-card max-width="400">
            <v-card-title class="justify-center card-title">{{
              aboutMe.name
            }}</v-card-title>
            <v-card-text>
              {{ aboutMe.univ }} <br />
              {{ aboutMe.hobby }} <br />
              {{ aboutMe.rank }} <br />
              {{ aboutMe.email }}
            </v-card-text>
            <v-card-actions class="justify-center">
              <a :href="aboutMe.github.url" target="_blank">
                <v-btn icon>
                  <v-fa :icon="['fab', 'github']" size="2x"></v-fa>
                </v-btn>
              </a>
              <a :href="aboutMe.twitter.url" target="_blank">
                <v-btn icon>
                  <v-fa :icon="['fab', 'twitter']" size="2x"></v-fa>
                </v-btn>
              </a>
              <a :href="aboutMe.atcoder.url" target="_blank">
                <v-btn outlined color="grey darken-2" small rounded>
                  <v-fa :icon="['fa', 'link']" size="lg"></v-fa>
                  AtCoder</v-btn
                >
              </a>
              <a :href="aboutMe.qiita.url" target="_blank">
                <v-btn outlined color="grey darken-2" small rounded>
                  <v-fa :icon="['fa', 'link']" size="lg"></v-fa>
                  Qiita
                </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      aboutMe: {
        name: "川北智也",
        univ: "同志社大学理工学部\nインテリジェント情報工学科",
        email: "tommycsth61 [at] gmail.com",
        hobby: "Web開発・競技プログラミング・サイクリング",
        rank: "AtCoder: 茶 / Paiza: Sランク",
        twitter: {
          url: "https://twitter.com/Tomm7282",
        },
        github: {
          url: "https://github.com/momo3159",
        },
        atcoder: {
          url: "https://atcoder.jp/users/Tommy3",
        },
        qiita: {
          url: "https://qiita.com/tommy3",
        },
      },
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
  border-bottom: 3px solid #304ffe;
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
</style>
