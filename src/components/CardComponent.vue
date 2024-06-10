<script>
// istanza vue:
export default {
    nome: 'cardComponent',
    emits: 'readMore',
    props: [
        'title',
        'titleOrig',
        'language',
        'vote',
        'imgBackdrop',
        'imgPoster',
        'imageInfo',
        'text',
        'textMin',
        'idx'
    ],
    data() {
        return {
          

        }
    },
    methods: {
        // metodo per assegnare le bandierina:
        flags(language){
            switch (language) {
                case 'sq':
                    return '/flags/al.svg';
                case 'ca':
                    return '/flags/ca.svg';
                case 'cn':
                    return '/flags/cn.svg';
                case 'de':
                    return '/flags/de.svg';
                case 'fr':
                    return '/flags/fr.svg';
                case 'no':
                    return '/flags/no.svg';
                case 'in':
                    return '/flags/in.svg';
                case 'it':
                    return '/flags/it.svg';
                case 'ja':
                    return '/flags/jp.svg';
                case 'ru':
                    return '/flags/ru.svg';
                case 'en':
                    return '/flags/us.svg';
                case 'es':
                    return '/flags/es.svg';
                case 'ko':
                    return '/flags/kr.svg';
                default:
                    return language;
            }
        }
    },
    
}

</script>


<!-- HTML -->
<template>

    <div class="card">

        <!-- immagine -->
        <div class="image">
            <img :src="imgPoster ? imageInfo.url + imageInfo.sizePoster + imgPoster : '/img/no-image.webp'"
                :alt="imgPoster ? title : ''">
        </div>

        <!-- info in hover -->
        <div class="hidden">
            <p v-show="title.length"> <strong>Titolo:</strong> {{ title }} </p>
            <p v-show="title !== titleOrig"> <strong>Titolo originale:</strong> {{ titleOrig }} </p>

            <!-- voto: stars -->
            <p> <strong>Voto: </strong>
                <span v-for="n in 5" :key="n">
                    <font-awesome-icon :icon="vote >= n ? ['fas', 'star'] : ['far', 'star']"
                        :class="{ 'full-star': vote >= n }" />
                </span>
            </p>
            
            <!-- lingua: bandiera -->
            <div>
                <strong>lingua: </strong>
                <img :src="flags(language)" :alt="language">
            </div>

            <!-- descrizione -->
            <p> <strong>Overview:</strong> {{ textMin }} </p>
            <button class="btn mt-20" 
            @click="$emit('readMore', idx)"
            >Leggi tutto</button>
        </div>


    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/extende' as *;


.card {
    border-radius: .625rem;
    overflow: hidden;
    background-color: $black;
    color: $text;
    @extend %shadow;    
    .full-star {color: $stars}
    &:hover .image {
        display: none;
    }
    &:hover .hidden {display: block;}
    .image {
        img {
            display: block;
            width: 100%;
            height: 23rem;
            object-fit: cover;
            object-position: center;
        }
    }
    .hidden {
        height: 23rem;
        overflow: auto;
        display: none;
        padding: 1.5625rem;       
        strong {color: $red;}
        p, div {margin-bottom: .5rem;}
        img {
            margin-left: .3125rem;
            width: 1.375rem;
            vertical-align: middle;
        }
        button {
            padding: .5rem .9375rem;
            background-color: $red;
            color: $text;
        }
    }
}

</style>