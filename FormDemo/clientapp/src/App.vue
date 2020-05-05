<template>
    <div id="app">
        <b-img src="./img/logo.png" fluid alt="Responsive image" style="width:150px; height:50px"></b-img>
        
        <component :is='selectedPage'></component>
    </div>
</template>

<script>
    import FirstPage from './components/FirstPage.vue'
    import SecondPage from './components/SecondPage.vue'
    import ThirdPage from './components/ThirdPage.vue'
    import FourthPage from './components/FourthPage.vue'

export default {
        name: 'app',
        //data() {
        //    return {
        //        selectedPage: this.$store.state.selectedPage
        //    }
        //},
        computed: {
            selectedPage() {
                return this.$store.state.selectedComponent;
            }
        },
  components: {
      FirstPage, SecondPage, ThirdPage, FourthPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height : 500px;
  width: 600px;
}
</style>
