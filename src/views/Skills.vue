<template>
  <div id="skills">
    <span class="head">SKILLS</span>
    <v-container class="mt-10">
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          v-for="skill in skills"
          v-bind:key="skill.name"
          align="center"
        >
          <v-card max-width="400" class="card">
            <v-progress-circular
              class="mt-auto"
              :rotate="-90"
              :size="150"
              :width="10"
              :value="skill.per"
              color="orange darken-2"
            >
              {{ skill.name }}<br />
              {{ skill.per }}%
            </v-progress-circular>
            <v-card-text class="text-left mt-auto">{{
              skill.content
            }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Skills",
  data: function () {
    return {
      skills: [
        {
          name: "C",
          per: 50,
          content:
            "大学の講義で勉強しました。現在はアルゴリズムやネットワークプログラミングの勉強で用いています。",
        },
        { name: "C++", per: 40, content: "競技プログラミングで用いています。" },
        {
          name: "Python",
          per: 40,
          content:
            "機械学習の勉強や、ちょっとしたコードを書く時に用いています。最近はFlaskを用いてAPIを書きました。",
        },
        {
          name: "Java",
          per: 40,
          content:
            "大学の講義で勉強しました。2年生の時にGUIライブラリのJavaFxを、3年生の時にサーバーサイドのJavaを扱いました。オブジェクト指向に強くなりたいです。",
        },
        {
          name: "JavaScript",
          per: 50,
          content: "Webアプリ開発で用いています。",
        },
        {
          name: "TypeScript",
          per: 10,
          content: "型があると便利そうだなぁと思って勉強を始めました。",
        },
        {
          name: "Vue.js",
          per: 40,
          content:
            "このポートフォリオを作成するにあたって勉強を始めました。インターンなどで使用しました。",
        },
        {
          name: "React.js",
          per: 10,
          content: "Reactも触ってみたいと思い勉強を始めました。",
        },
        {
          name: "Go",
          per: 10,
          content:
            "サーバーサイドを勉強するにあたり、Goに手をつけました。文法がシンプルで良いなぁと思っています。",
        },
      ],
    };
  },
  computed: {
    getYear: function (i) {
      return this.month[i];
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
* {
  font-family: "Orbitron", sans-serif;
}
#skills {
  margin-top: 100px;
}
.head {
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid;
}
</style>
