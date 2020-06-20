<template>
  <div class="history">
    <span class="head">HISTORY</span>
    <v-app>
      <v-container class="mt-10">
        <v-row>
          <v-col>
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item color="orange darken-2">
                <v-card max-width="600">
                  <v-card-title
                    class="font-weight-bold orange darken-2 text-justify"
                    ><span
                      >同志社大学理工学部インテリジェント情報工学科入学</span
                    ></v-card-title
                  >
                  <v-card-subtitle class="text-left mt-auto"
                    >2018.4</v-card-subtitle
                  >
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <v-card
                  max-width="1000"
                  href="https://rohm.doshisha.ac.jp/attach/page/ROHM-PAGE-JA-59/134605/file/2018_pj.pdf"
                >
                  <v-card-title
                    class="font-weight-bold blue darken-2 text-justify"
                    ><span
                      >同志社大学ローム記念館プロジェクト Oh! Do
                      IT!（オムロン株式会社連携）</span
                    ></v-card-title
                  >
                  <v-card-subtitle class="text-right mt-auto">
                    2018.6〜2019.2</v-card-subtitle
                  >
                  <v-card-text class="text-left mt-auto"
                    >「AI×健康」がテーマのプロジェクトでした。プロジェクトでの企画考案やPythonを用いて、FitbitというウェアラブルのフィットネスデバイスのAPIを叩いてデータを取得するコードなどを書いていました。またHeroku
                    を少しだけ触りました。
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="orange darken-2">
                <v-card href="https://wapiwapi1729.wixsite.com/website">
                  <v-card-title
                    class="font-weight-bold orange darken-2 text-justify"
                    ><span
                      >同志社大学ローム記念館プロジェクト WAPLI</span
                    ></v-card-title
                  >
                  <v-card-subtitle class="text-left mt-auto"
                    >2019.4〜2020.2</v-card-subtitle
                  >
                  <v-card-text class="text-left mt-auto"
                    >「同志社大学生の生活をより豊かにする」というテーマのもとで始まったネイティブアプリ開発プロジェクトです。チャットボット作成やPythonを用いて様々なデータをスクレイピングで取得するコードを書いていました。</v-card-text
                  >
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "History"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
.history {
  font-family: "Orbitron", sans-serif;
  margin-top: 100px;
}
.head {
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid;
}
span {
  color: #2c3e50;
}
v-card-subtitle {
  padding-top: 3px;
}
</style>
