<!-- JAVASCRIPT -->
<script>
// import:
import { store } from './store';
import newComponent from './components/NewComponent.vue';


export default {
   nome: 'nameComponent',
   props: {

   },
   data(){
      return{
        store,

      }
   },
   components: {
      newComponent,
   }
}

</script>


<!-- HTML -->
<template>
  
  <h1 class="ta-center mt-20"> {{ store.text }}</h1>
  <newComponent />

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import



</style>

