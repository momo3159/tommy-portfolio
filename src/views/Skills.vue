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
            <img :src="skill.imgPath" />
            <br />
            {{ skill.name }}
            <hr style="width: 80%" />
            <v-rating
              readonly
              dense
              :value="skill.rating"
              full-icon="mdi-star"
              half-icon="mdi-star-half"
              empty-icon="mdi-star-outline"
              half-increments
              color="yellow darken-3"
              background-color="grey darken-1"
            ></v-rating>
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
          content:
            "大学の講義で勉強しました。現在はアルゴリズムやネットワークプログラミングの勉強で用いています。",
          rating: 3,
          imgPath: require("../assets/c.svg"),
        },
        {
          name: "C++",
          content: "競技プログラミングで用いています。",
          rating: 2,
          imgPath: require("../assets/c-plusplus.svg"),
        },
        {
          name: "Python",
          content:
            "機械学習の勉強や、ちょっとしたコードを書く時に用いています。最近はFlaskを用いてAPIを書きました。",
          rating: 3,
          imgPath: require("../assets/python.svg"),
        },
        {
          name: "Java",
          content:
            "大学の講義で勉強しました。2年生の時にGUIライブラリのJavaFxを、3年生の時にサーバーサイドのJavaを扱いました。オブジェクト指向に強くなりたいです。",
          rating: 2,
          imgPath: require("../assets/java.svg"),
        },
        {
          name: "JavaScript",
          content: "Webアプリ開発で用いています。",
          rating: 3,
          imgPath: require("../assets/javascript.svg"),
        },
        {
          name: "TypeScript",
          content: "型があると便利そうだなぁと思って勉強を始めました。",
          rating: 1,
          imgPath: require("../assets/typescript.svg"),
        },
        {
          name: "Vue.js",
          content:
            "このポートフォリオを作成するにあたって勉強を始めました。インターンなどで使用しました。",
          rating: 3,
          imgPath: require("../assets/vue.svg"),
        },
        {
          name: "React.js",
          content: "Reactも触ってみたいと思い勉強を始めました。",
          rating: 1,
          imgPath: require("../assets/react.svg"),
        },
        {
          name: "Node.js",
          content: "Reactも触ってみたいと思い勉強を始めました。",
          rating: 1.5,
          imgPath: require("../assets/nodejs.svg"),
        },
        {
          name: "Go",
          content:
            "サーバーサイドを勉強するにあたり、Goに手をつけました。文法がシンプルで良いなぁと思っています。",
          rating: 3,
          imgPath: require("../assets/go.svg"),
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
img {
  width: 120px;
  height: 120px;
  margin-top: 5px;
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
