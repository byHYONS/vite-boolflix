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
            <div class="row gap-25 my-50">

                <cardComponent class="col ht-100 bdb"
                v-for="(cards, index) in store.movieRisults"
                :card="cards"
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