<template>
  <md-toolbar class="md-primary">
    <div class="md-title"><h2>Arabic Charts</h2></div>
    <div class="md-toolbar-section-end">
      <md-button class="md-icon-button"
                 title="Charts"
                 v-on:click="goCharts">
        <md-icon>insert_chart</md-icon>
      </md-button>
      <md-button class="md-icon-button"
                 title="Share"
                 v-if="showShare"
                 v-on:click="copyShareLinkToBuffer">
        <md-icon>share</md-icon>
      </md-button>
      <md-button class="md-icon-button"
                 title="Create a quiz"
                 v-on:click="goHome">
        <md-icon>add</md-icon>
      </md-button>
    </div>
    <div style="clear: both"></div>
  </md-toolbar>
</template>
<script>
  export default {
    name: 'Toolbar',
    props: {
      quizId: String,
      name: String,
      showShareCopied: Function,
      showShare: Boolean,
    },
    data() {
      return {
      }
    },

      methods: {

      // Copies link to clipboard
      copyShareLinkToBuffer() {

        const url = `http://${window.location.host}/#/quizzes/${this.quizId}/`;
        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        console.log('hiii');
        this.$emit('showShareCopied');
      },

      goCharts() {
        this.$router.push('/charts');
      },

      goHome() {
        this.$router.push('/');
      },
    }
  }
</script>

<style scoped>

</style>
