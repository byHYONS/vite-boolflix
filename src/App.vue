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
               response.data.results.forEach(element => this.store.results.push(element));
               };
            this.calculateStar();
            this.truncateText();
         });

         // chiamata serie tv:
         axios.get(url + searchTv, {
            params,
         }).then(response => {
            if (this.store.selectGenre === 'all' || this.store.selectGenre === 'tv') {              
               response.data.results.forEach(element => this.store.results.push(element));               
               };
            this.calculateStar();
            this.truncateText();
         });        

      },

      // bottone search e select:
      runSearch() {
         this.store.results = [];        
         // console.log('ho premuto il bottone search');

         if (!this.store.userSearch.toLowerCase().trim()) return
         this.apiCall(this.store.userSearch);

         
      },

      // calcolare il voto:
      calculateStar() {
         this.store.results.forEach(element => {
            this.store.stars.averangeStars = Math.ceil(element.vote_average / 2);
            console.log(this.store.stars.averangeStars);
         })
      },

      // troncare il testo lungo:
      truncateText() {
         console.log('spno un troncamento');
         this.store.results.forEach(element => {
            if (element.overview.length > this.limit) {
               this.store.textMin = element.overview.substring(0, this.limit) + '...';
            } else {
               this.store.textMin = element.overview;
            }
            console.log(this.store.textMin);
         })

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
