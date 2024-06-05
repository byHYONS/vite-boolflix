<script>
// import:


export default {
    nome: 'searchComponent',
    props: {

    },
    data() {
        return {
           

        }
    },
   
}

</script>


<!-- HTML -->
<template>

    <div class="search-bar">

        <input type="text" placeholder="Search">

        <select name="movie-genre" id="movie-genre">

            <option value="all">Select genre</option>
            <option value="movie">Movie</option>
            <option value="tv">TV series</option>

        </select>

       <button class="btn search">Search</button>
       <button class="btn reset">Reset</button>

    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import:
@use '../assets/scss/partials/variables' as *;

.search-bar {
    
}


</style>