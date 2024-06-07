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
            overview: {},
            modale: true,
            overlay: true,
        }
    },
    components: {
        cardComponent,

    },
    methods: {
        // metodo per aprire la modale dell'elemento selezionato:
        readMore(idx){
            console.log('ti passo la dard: ' + idx);
            this.modale = false;
            this.overlay = false;
            document.body.style.overflow = 'hidden'; // bloccare lo scroll
            this.store.results.forEach(element => {
                if (element.id === idx) {
                    this.overview = element;
                    element.stars = this.calculateStar(element.vote_average);
                } 

                })
            console.log(this.overview);
        },
        // calcolo delle stelle:
        calculateStar(vote) {
           return Math.ceil(vote / 2); 
        },
        // chiude la modale:
        close() {
            console.log('chiudi la modale');
            this.modale = true;
            this.overlay = true;
            document.body.style.overflow = '';      // sbloccare lo scroll
        }
    }
}

</script>


<!-- HTML -->
<template>

    <main>
        <div class="overlay" :class="{'hidden': overlay}">
        </div>
        <div class="container-80">
            <div v-show="store.results.length" class="results">
                <p>risultati: <strong> {{ store.results.length }} </strong></p>
            </div>
            <div class="row gap-25 py-50">
                <cardComponent class="col" v-for="(cards, index) in store.results"
                    :title="cards.title ? cards.title : cards.name"
                    :titleOrig="cards.original_title ? cards.original_title : cards.original_name"
                    :language="cards.original_language" :vote="cards.stars" :imgBackdrop="cards.backdrop_path"
                    :imgPoster="cards.poster_path" :imageInfo="store.imageInfo" :text="cards.overview"
                    :textMin="cards.textMin" :idx="cards.id" :key="index" @readMore="readMore" />

            </div>

            <div class="card-info" :class="{'hidden': modale}">
                <img :src="overview.backdrop_path ? store.imageInfo.url + store.imageInfo.sizeBackdrop + overview.backdrop_path : ''"
                    :alt="overview.backdrop_path ? overview.title : ''">
                <h3>{{overview.title}}</h3>
                <div class="info">
                    <p><strong>Overview: </strong>{{ overview.overview }}</p>
                    <p><strong class="mt-5">Voto: </strong>
                        <span v-for="n in 5" :key="n">
                            <font-awesome-icon :icon="overview.stars >= n ? ['fas', 'star'] : ['far', 'star']"
                                :class="{ 'full-star': overview.stars >= n }" />
                        </span>
                    </p>
                    <button class="btn close"
                    @click="close"
                    >Chiudi</button>

                </div>
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
@use '../assets/scss/partials/extende' as *;

main {
    .overlay {
        background-color: rgba($black, 0.95) !important;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 50;       
    }
    .container-80 {
        position: relative;
        min-height: calc(100vh - 11.25rem);
        .results {
            text-align: center;
            @extend %shadow;
            width: 12.5rem;
            margin-top: 1.875rem;
            background-color: $gray;
            color: $text;
            border-radius: .625rem;
            padding: .75rem 1.25rem;
            strong {
                margin-left: .625rem
            }
        }
    }

    .col {
        @include col-x(4, 25px)
    }
    .hidden {display: none;}
    .card-info{
        position: fixed;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        border-radius: .9375rem;
        background-color: $black;
        width: 45%;
        height: 600px;
        overflow: scroll;
        @extend %shadow;
        z-index: 110;
        .info {
            padding: 1.875rem;
            strong {
                color: $red; 
                margin-right: 10px ;
            }
            p {color: $text;}
        }
        .full-star {color: $stars}
        
        h3 {
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: .625rem 1.5625rem;
            background-color: rgba($black, .7);
            border-radius: .9375rem;
            color: $ligthGray;
        }
        button {
            margin-top: .9375rem;
            padding: .5rem .9375rem;
            background-color: $red;
            color: $text;
        }
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