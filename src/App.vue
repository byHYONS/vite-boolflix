<!-- JAVASCRIPT -->
<script>
// import:
import { store } from './store';
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

      }
   },
   components: {
      headerComponent,
      listComponent,
      footerComponent,

   }
}

</script>


<!-- HTML -->
<template>
  
  <h1 class="ta-center"> {{ store.text }}</h1>
  
  <headerComponent class="header" />

  <listComponent />

  <footerComponent />

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import



</style>

