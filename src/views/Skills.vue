<template>
  <div id="skills">
    <span class="head">SKILLS</span>
    <v-app>
      <v-container class="mt-10 ms-auto">
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="6"
            md="3"
            lg="3"
            v-for="skill in skills"
            v-bind:key="skill.name"
          >
            <v-card max-width="200" class="card">
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
              <v-card-text>{{skill.month}}年</v-card-text>
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
        { name: "Python", per: 10, month: 0 },
        { name: "Java", per: 10, month: 0 },
        { name: "C", per: 50, month: 0 },
        { name: "C++", per: 90, month: 0 },
        { name: "JavaScript", per: 50, month: 0 },
        { name: "Vue.js", per: 100, month: 0 },
        { name: "Go", per: 10, month: 0 },
        { name: "Git", per: 12, month: 0 }
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
