<script>
// import:
import { store } from '../store';

export default {
    nome: 'searchComponent',
    emits: ['search', 'reset', 'changeSelect', 'enter'],
    
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
        @keyup.enter="$emit('enter')"
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
        <div class="buttons ml-15">
            <button class="btn search"
            @click="$emit('search')"
            ><strong>Search</strong></button>
     
            <!-- bottone reset -->
            <button class="btn reset"
            @click="$emit('reset')"
            >Reset</button>
        </div>

    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import:
@use '../assets/scss/partials/variables' as *;

.search-bar {
    text-align: center;
    input {
        padding: .5rem .75rem;
        border-radius: .625rem;
        border: unset;
        background-color: $black;
        border: .12rem solid $gray;
        color: $text;
        &:focus {
            outline: none;
        }
    }
    select {
        @extend input;
        margin-left: .625rem;
    }
    button {
        @extend select;
        &.search {
            background-color: $gray;
            border: .01rem solid $ligthGray;
            color: $text3;
        }
        &.reset {
            background-color: $red;
            color: $text;
            border: .01rem solid $red;
        }
    }
    .buttons {
       
        display: inline-block;
    }
}

@media screen and (max-width: 651px) {
    .search-bar {
        .buttons {
            margin-top: 1.25rem;
        }

    }
}


</style>