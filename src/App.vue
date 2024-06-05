<!-- JAVASCRIPT -->
<script>
// import state management:
import { store } from './store';

// import axios:
import axios from 'axios';

// import component:
import headerComponent from './components/HeaderComponent.vue';
import listComponent from './components/ListComponent.vue';
import footerComponent from './components/FooterComponent.vue';

export default {
   nome: 'AppMain',
   props: {

   },
   data(){
      return{
        store,
        axios,

      }
   },
   components: {
      headerComponent,
      listComponent,
      footerComponent,

   },
   methods: {
      apiCall() {
         const params = {
            api_key: this.store.apiInfo.apiKey,
            query: this.store.apiInfo.query,

         }

         const {url, searchMovie, searchTv} = this.store.apiInfo

         // chiamata film:
         axios.get(url + searchMovie, {
            params,
         }).then(response => {
            this.store.movieRisults = response.data.results
         });

         // chiamata serie tv:
         axios.get(url + searchTv, {
            params,
         }).then(response => {
            this.store.tvRisults = response.data.results
         });




      }
   },
   created() {
      this.apiCall()
   },
}

</script>


<!-- HTML -->
<template>

   <h1 class="ta-center"> {{ store.tvRisults }}</h1>

   <headerComponent class="header" />

   <listComponent />

   <footerComponent />

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import



</style>

