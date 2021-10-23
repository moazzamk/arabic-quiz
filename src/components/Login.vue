<template>
  <body style="position: relative; display: grid">
    <md-toolbar class="md-primary">
      <div class="md-title"><h2>Arabic Quiz</h2></div>
    </md-toolbar>
    <md-card style="margin: auto; margin-top: 50px; padding: 20px">
      <form v-on:submit="handle" class="" style="  margin: auto">
        <md-field>
          <label for="name">Write your name here</label>
          <md-input type="text"
                 name="name"
                 id="name"
                 class="name md-input"
                 />
        </md-field>

        <md-button type="submit"
                   class="md-raised
                   md-primary btn">GO</md-button>
        <div id="show-options"
             style="text-align: right"
             class="link"
             v-on:click="unhideOptions">advanced</div>
        <div id="options-container" v-if="showOptions">
          <md-switch v-model="options.doer" >Inside Doer</md-switch>
          <md-switch v-model="options.family" >Identify family</md-switch>
        </div>
      </form>
    </md-card>
  </body>
</template>

<script>
  import { createQuiz } from "../services/client";
  export default {
    name: 'Login',
    props: {
      swapComponent: Function,
      quizId: String,

    },
    data: function() {
      console.log(this.quizId);
      return {
        showOptions: false,
        options: {
          family: true,
          doer: true
        }
      };
    },
    methods: {
      unhideOptions() {
        this.showOptions = true;
      },
      async handle(e) {
        console.log(e.target);
        e.stopPropagation();
        e.preventDefault();

        const quizId = (this.quizId) ? this.quizId : await createQuiz();

        console.log(quizId, "quizId");
        const name = document.getElementById('name').value;
console.log('yo ma nigga');
        const encodedOptions = JSON.stringify(this.options);

        if (name) {
          this.$router.push(`/quizzes/${quizId}/${name}?options=${encodedOptions}`);
        }
      }
    }
  }
</script>

<style scoped>
  .name {
    width: 400px;
  }
  .link {
    color: #392edd;
    cursor: pointer;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn {
    font-size: 30px;
    height: 45px;
    padding-left: 40px;
    padding-right: 40px;
  }
</style>