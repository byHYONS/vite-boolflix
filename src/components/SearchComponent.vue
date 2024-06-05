<script>
// import:
import { store } from '../store';

export default {
    nome: 'searchComponent',
    emits: ['search', 'reset', 'changeSelect'],
    
    data() {
        return {
           store,

        }
    },
   
}

</script>


<!-- HTML -->
<template>

    <div class="search-bar">

        <!-- input di ricerca -->
        <input type="text" placeholder="Search"
        v-model="store.userSearch">

        <!-- menù selezione a tendina -->
        <select name="movie-genre" id="movie-genre"
        v-model="store.selectGenre"
        @change="$emit('changeSelect')">

            <option value="all">Select genre</option>
            <option value="movie">Movie</option>
            <option value="tv">TV series</option>

        </select>

        <!-- bottone ricerca -->
       <button class="btn search"
       @click="$emit('search')">Search</button>

       <!-- bottone reset -->
       <button class="btn reset"
       @click="$emit('reset')">Reset</button>

    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import:
@use '../assets/scss/partials/variables' as *;

// .search-bar {
    
// }


</style>