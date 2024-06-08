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
   data(){
      return{
        store,
        axios,
        loading: true,
        limit: 70,

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
         this.loading = false; // quando carica la pagina
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
            if (this.store.selectGenre === 'all' || this.store.selectGenre === 'movie'){
               response.data.results.forEach(element => {
                  this.store.results.push(element)                               // assegno il valore alla variabile result in store
                  element.stars = this.calculateStars(element.vote_average);     // per calcolo stelle
                  element.textMin = this.truncateText(element.overview);         // per troncamento testo
                  this.loading = true;       
               });
            };
         });

         // chiamata serie tv:
         axios.get(url + searchTv, {
            params,
         }).then(response => {
            if (this.store.selectGenre === 'all' || this.store.selectGenre === 'tv') {              
               response.data.results.forEach(element => {
                  this.store.results.push(element)                               // assegno il valore alla variabile result in store
                  element.stars = this.calculateStars(element.vote_average);     // per calcolo stelle
                  element.textMin = this.truncateText(element.overview);         // per troncamento testo
                  this.loading = true;       

               });   
            };
         });        

      },

      // bottone search e select:
      runSearch() {
         this.store.results = [];        
         // console.log('ho premuto il bottone search');

         if (!this.store.userSearch.toLowerCase().trim()) return
         this.apiCall(this.store.userSearch);   
      },

      // calcolo delle stelle:
      calculateStars(voteAverage) {
         return Math.ceil(voteAverage / 2);                                      // arrotondo per eccesso
      },

      // troncare il testo lungo:
      truncateText(text) {
         console.log('spno un troncamento');
         return text.length > this.limit ? text.substring(0, this.limit) + '...' : text;
      },

      // bottone reset:
      reset() {
         console.log('ho premuto il bottorìne reset');
         this.store.userSearch = '';
         this.store.selectGenre = 'all';
         this.store.results = [];
      }
   },
   created() {
      
   },
}

</script>


<!-- HTML -->
<template>

   <headerComponent class="header" 
   @search="runSearch()"
   @enter="runSearch()"
   @reset="reset()"
   @changeSelect="runSearch()" />
   
   <!-- caricampento pagina -->
   <div class="ovrlay" v-if="!loading">
      <h3>Caricamento...</h3>
   </div>

   <listComponent />

   <footerComponent />

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import:
@use '../src/assets/scss/partials/variables' as *;

.ovrlay {
   background-color: rgba($black, 0.80);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100vw;
   height: 100vh;
   z-index: 50;
   h3 {
      text-align: center;
      color: $text;
      font-size: 3.4375rem;
      align-content: center;
      line-height: 100vh;
   }
}

</style>
