<script>
// import:
import searchComponent from './SearchComponent.vue';

export default {
    nome: 'headerComponent',
    emits: ['serch', 'reset', 'changeSelect'],
    
    data() {
        return {
            logo: 'BOOLFLIX'

        }
    },
    components: {
        searchComponent,

    }
}

</script>


<!-- HTML -->
<template>

    <header>

        <div class="menu">

            <!-- logo brand -->
            <h1> {{logo}} </h1>

            <!-- componente per la ricerca -->
            <searchComponent 
            @search="$emit('search')"
            @reset="$emit('reset')"
            @changeSelect="$emit('changeSelect')" />

        </div>


    </header>


</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import:
@use '../assets/scss/partials/variables' as *;


header {
    position: sticky;
    top: 0;
    width: 100%;
    min-height: 5rem;
    background-color: $black;
    align-content: center;
    box-shadow: 0 5px 8px rgba($black, 0.3);
    z-index: 5;
    .menu {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        font-size: 3rem;
        font-weight: 900;
        color: $text3;
    }
}

@media screen and (max-width: 992px) {
    header {
        .menu {
            flex-direction: column;
            margin-bottom: 2.1875rem;
        }
        h1 {
            margin: 1.5625rem 0;
        }
    }
}

</style>
