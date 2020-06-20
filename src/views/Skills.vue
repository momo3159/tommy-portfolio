<template>
  <div id="skills">
    <span class="head">SKILLS</span>
    <v-app>
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
              <v-card-text class="text-left mt-auto">{{skill.content}}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Skills",
  data: function() {
    return {
      skills: [
        { name: "Python", per: 10, content:"機械学習の勉強や、ちょっとしたコードを書く時に用いています。" },
        { name: "Java", per: 40, content: "大学の講義で勉強しています。2年生の時にGUIライブラリのJavaFxを、現在サーバーサイドのJavaを勉強しています。オブジェクト指向に強くなりたいです。"},
        { name: "C", per: 50, content: "大学の講義で勉強しました。現在はアルゴリズムやネットワークプログラミングの勉強で用いています"},
        { name: "C++", per: 40, content: "競技プログラミングで用いています。" },
        { name: "JavaScript", per: 20, content: "Webアプリ開発で用いています。" },
        { name: "Vue.js", per: 20, content: "このポートフォリオを作成するにあたって勉強を始めました。"},
      ]
    };
  },
  computed: {
    getYear: function(i) {
      return this.month[i];
    }
  }
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
