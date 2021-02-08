<template>
  <div id="history">
    <span class="head">HISTORY</span>
    <v-container class="mt-10">
      <v-row>
        <v-col>
          <v-timeline id="timeline" :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(history, i) in histories"
              :key="`${history.title}-${history.term}`"
              :color="`${TIMELINE_ITEM_COLOR[i % 2]} accent-4`"
            >
              <v-card 
              
          >
                <h6 class="history-title">
                  {{ history.title }}
                </h6>
                <v-card-subtitle :class="`mt-auto`">
                  <span :styles="`border-bottom: 2px solid ${TIMELINE_ITEM_COLOR[i%2]} accent-4;`">{{ history.term }}</span>
                </v-card-subtitle>
                
                
                <v-card-text :class="`white mt-auto`">
                  {{ history.body }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      TIMELINE_ITEM_COLOR: ["deep-purple", "indigo"],
      TIMELINE_ITEM_POSITION: ["left", "right"],
      histories: [
        {
          title: "同志社大学理工学部インテリジェント情報工学科入学",
          term: "2018.4",
          body:
            "京田辺キャンパスは自然が豊かでいいところです。ラーネッド記念図書館がお気に入りです。",
        },
        {
          title:
            "同志社大学ローム記念館プロジェクト Oh! Do IT!（オムロン株式会社連携）",
          term: "2018.6〜2019.2",
          body:
            "「AI×健康」がテーマのプロジェクトでした。プロジェクトでの企画考案やPythonを用いて、FitbitというウェアラブルのフィットネスデバイスのAPIを叩いてデータを取得するコードなどを書いていました。またHerokuを少しだけ触りました。",
        },
        {
          title: "同志社大学ローム記念館プロジェクト WAPLI",
          term: "2019.4〜2020.2",
          body:
            "「同志社大学生の生活をより豊かにする」というテーマのもとで始まったネイティブアプリ開発プロジェクトです。チャットボット作成やPythonを用いて様々なデータをスクレイピングで取得するコードを書いていました。",
        },
        {
          title:
            "三菱UFJインフォメーションテクノロジー株式会社 サマーインターン",
          term: "2020.8.10〜2020.8.14",
          body:
            "ハッカソン形式でアプリケーション開発を行いました。フロントエンドはVue.js、バックエンドはAWSを用いました。フロントエンドを担当しました。",
        },
        {
          title: "株式会社いい生活 サマーインターン",
          term: "2020.8.17〜2020.8.21",
          body:
            "Vue.js, Firebase, いい生活様のAPIを用いたアプリケーション開発をハッカソン形式で行いました。",
        },
        {
          title: "株式会社MOTEX サマーインターン",
          term: "2020.8.24〜2020.8.28",
          body:
            "Python, AWS, ChatWork APIを用いた業務アプリの開発を行いました。",
        },
        {
          title: "ニフティ株式会社 サマーインターン",
          term: "2020.9.2〜2020.9.4",
          body: "実務データに近いものを用いてデータ分析を行いました。",
        },
        {
          title: "株式会社ナビタイム サマーインターン",
          term: "2020.9.7〜2020.9.11",
          body: "ナビタイムのAPIを用いたWebサイト作成を行いました。",
        },
        {
          title: "N社",
          term: "2020.mm.dd〜2020.mm.dd",
          body:
            "Vue.js/Flask/PostgreSQL/Heroku/推薦アルゴリズムを用いたアプリ開発を行いました。 フロントエンドとバックエンドの開発を担当しました。",
        },
        {
          title: "株式会社ACCESS ウィンターインターン",
          term: "2020.12.15",
          body: "chromiumベースのブラウザの機能拡張やUIの作成を行いました。",
        },
        {
          title: "株式会社ACCESS ウィンターインターン",
          term: "2020.12.15",
          body: "chromiumベースのブラウザの機能拡張やUIの作成を行いました。",
        },
        {
          title: "NTTコミュニケーションズ k8sハンズオン",
          term: "2021.1.31",
          body: "",
        },
        {
          title: "CA Web Speed Hackathon 2021",
          term: "2021.2.7〜2021.2.8",
          body: "",
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
#history {
  margin-top: 100px;
}
.head {
  font-size: 40px;
  font-weight: bold;
    border-bottom: 3px solid #304FFE;
}
#timeline {
  width: 80%;
  margin: auto;
}
.history-title {
  font-weight: bold;
  font-size: 20px;
  padding-top: 10px;
}
span {
  color: #212121;
}
.card-subtitle {
  padding-top: 3px;
}
hr {
  width: 80%;
  margin: 0 auto;
}



</style>
