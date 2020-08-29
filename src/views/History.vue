<template>
  <div class="history">
    <span class="head">HISTORY</span>
    <v-app>
      <v-container class="mt-10">
        <v-row>
          <v-col>
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item color="orange darken-2">
                <v-card  color="orange darken-2" max-width="600">
                  <v-card-title class="font-weight-bold text-justify">
                    <span>>同志社大学理工学部インテリジェント情報工学科入学</span>
                  </v-card-title>
                  <v-card-subtitle class="text-left mt-auto">2018.4</v-card-subtitle>
                  <v-card-text class="text-left white mt-auto">
                    京田辺キャンパスは自然が豊かでいいところです。ラーネッド記念図書館がお気に入りです。
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <v-card
                  max-width="1000"
                  href="https://rohm.doshisha.ac.jp/attach/page/ROHM-PAGE-JA-59/134605/file/2018_pj.pdf"
                  color="blue darken-2"
                >
                  <v-card-title class="font-weight-bold text-justify">
                    <span>同志社大学ローム記念館プロジェクト Oh! Do IT!（オムロン株式会社連携）</span>
                  </v-card-title>
                  <v-card-subtitle class="text-right mt-auto">2018.6〜2019.2</v-card-subtitle>
                  <v-card-text class="text-left white mt-auto">
                    「AI×健康」がテーマのプロジェクトでした。プロジェクトでの企画考案やPythonを用いて、FitbitというウェアラブルのフィットネスデバイスのAPIを叩いてデータを取得するコードなどを書いていました。またHeroku
                    を少しだけ触りました。
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="orange darken-2">
                <v-card color="orange darken-2" href="https://wapiwapi1729.wixsite.com/website">
                  <v-card-title class="font-weight-bold orange darken-2 text-justify">
                    <span>同志社大学ローム記念館プロジェクト WAPLI</span>
                  </v-card-title>
                  <v-card-subtitle class="text-left mt-auto">2019.4〜2020.2</v-card-subtitle>
                  <v-card-text class="text-left white  mt-auto">
                    「同志社大学生の生活をより豊かにする」というテーマのもとで始まったネイティブアプリ開発プロジェクトです。チャットボット作成やPythonを用いて様々なデータをスクレイピングで取得するコードを書いていました。
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <v-card max-width="1000" color="blue darken-2">
                  <v-card-title class="font-weight-bold text-justify">
                    <span>三菱UFJインフォメーションテクノロジー株式会社 サマーインターン</span>
                  </v-card-title>
                  <v-card-subtitle class="text-right mt-auto">2020.8.10〜2020.8.14</v-card-subtitle>
                  <v-card-text class="text-left white mt-auto">
                    ハッカソン形式でアプリケーション開発を行いました。フロントエンドはVue.js、バックエンドはAWSを用いました。フロントエンドを担当しました。
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="orange darken-2">
                <v-card color="orange darken-2">
                  <v-card-title class="font-weight-bold orange darken-2 text-justify">
                    <span>株式会社いい生活 サマーインターン</span>
                  </v-card-title>
                  <v-card-subtitle class="text-right mt-auto">2020.8.17〜2020.8.21</v-card-subtitle>
                  <v-card-text class="text-left white mt-auto">
                    Vue.js, Firebase, いい生活様のAPIを用いたアプリケーション開発をハッカソン形式で行いました。
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <v-card max-width="1000" color="blue darken-2">
                  <v-card-title class="font-weight-bold text-justify">
                    <span>株式会社MOTEX</span>
                  </v-card-title>
                  <v-card-subtitle class="text-right mt-auto">2020.8.24〜2020.8.28</v-card-subtitle>
                  <v-card-text class="text-left white mt-auto">
                    Python, AWS, ChatWork APIを用いた業務アプリの開発を行いました。
                  </v-card-text>
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
*{
  font-family: "Orbitron", sans-serif;
}
.history {
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
