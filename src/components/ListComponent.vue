<script>
// import state management:
import { store } from '../store';

// import:
import cardComponent from './CardComponent.vue';

export default {
    nome: 'listComponent',
    data() {
        return {
            store,

        }
    },
    components: {
        cardComponent,

    }
}

</script>


<!-- HTML -->
<template>

    <main>
        <div class="container-80">
            <div class="row gap-25 py-50">

                <cardComponent class="col"
                v-for="(cards, index) in store.results"
                :title="cards.title ? cards.title : cards.name"                
                :titleOrig="cards.original_title ? cards.original_title : cards.original_name" 
                :language="cards.original_language" 
                :vote="cards.stars"              
                :imgBackdrop="cards.backdrop_path"              
                :imgPoster="cards.poster_path"              
                :imageInfo="store.imageInfo"              
                :text="cards.overview"              
                :textMin="cards.textMin"              
                :key="index" />

            </div>
        </div>
    </main>


</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import
@use '../assets/scss/partials/utilities' as *;
@use '../assets/scss/partials/mixin' as *;
@use '../assets/scss/partials/variables' as *;

main {
    .container-80 {
        min-height: calc(100vh - 11.25rem);
    }

    .col {
        @include col-x(4, 25px)
    }
}


// responsive:
@media screen and (max-width: 992px) {
    main {
        .col {
            @include col-x(3, 25px)
            
        }
    }
}

@media screen and (max-width: 768px) {
    main {
        .col {
            @include col-x(2, 25px)
        }
    }
}

@media screen and (max-width: 576px) {
     main {
        .col {
            @include col-x(1, 25px)
        }
    }
}

</style>