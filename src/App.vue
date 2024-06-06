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
      // chiamata API:
      apiCall(query) {
         // query params:
         const params = {
            api_key: this.store.apiInfo.apiKey,
            query: query,

         }

         // destrutturo ed estraggo parametri da store.apiInfo per migliorare leggibilità:
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

         if (this.store.selectGenre === 'tv') {
            this.store.risults = this.store.tvRisults;
         } else if (this.store.selectGenre === 'movie') {
            this.store.risults = this.store.movieRisults;
         } else {
            this.store.risults = [];
            this.store.risults = this.store.risults.concat(this.store.tvRisults, this.store.movieRisults) ;
         }


      },
      // bottone search e select:
      runSearch() {
         console.log('ho premuto il bottone search');

         if (!this.store.userSearch.toLowerCase().trim()) return

         this.apiCall(this.store.userSearch);


      },

      // bottone reset:
      reset() {
         console.log('ho premuto il bottorìne reset');
         this.store.userSearch = '';
         this.store.selectGenre = 'all';
      }
   },
   created() {
      this.runSearch()
      
   },
}

</script>


<!-- HTML -->
<template>

   
   <headerComponent class="header" 
   @search="runSearch()"
   @reset="reset()"
   @changeSelect="runSearch()" />
   
      <!-- <p class="ta-center mt-25"> {{ store.movieRisults }}</p> -->
   
   <listComponent />

   <footerComponent />

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import



</style>
