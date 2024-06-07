<script>
// istanza vue:
export default {
    nome: 'cardComponent',
    props: [
        'title',
        'titleOrig',
        'language',
        'vote',
        'imgBackdrop',
        'imgPoster',
        'imageInfo',
        'text',
        'textMin'
    ],
    data() {
        return {
          

        }
    },
    
}

</script>


<!-- HTML -->
<template>

    <div class="card">

        <div class="image">
            <img :src="imgPoster ? imageInfo.url + imageInfo.sizePoster + imgPoster : '../../public/img/no-image.webp'"
                :alt="imgPoster ? title : ''">

        </div>

        <div class="hidden">
            <p v-show="title.length"> <strong>Titolo:</strong> {{ title }} </p>
            <p v-show="title !== titleOrig"> <strong>Titolo originale:</strong> {{ titleOrig }} </p>
            <p> <strong>Voto:</strong> {{ vote }} </p>

            <div v-if="language === 'it'">
                <strong>lingua: </strong>
                <img src="../../public/flags/it.svg" alt="language">
            </div>
            <div v-else-if="language === 'en'">
                <strong>lingua: </strong>
                <img src="../../public/flags/us.svg" alt="language">
            </div>
            <div v-else-if="language === 'sq'">
                <strong>lingua: </strong>
                <img src="../../public/flags/al.svg" alt="language">
            </div>
            <div v-else>
                <strong>lingua:</strong> {{ language }}
            </div>

            <p> <strong>Overview:</strong> {{ textMin }} </p>
            <button class="btn mt-20"
            @click="$emit(allOverview)"
            >Leggi tutto</button>
        </div>


    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;


.card {
    height: 23.75rem;
    border-radius: .625rem;
    overflow: hidden;
    background-color: $black;
    color: $text;

    &:hover .image {
        display: none;
    }

    .image {

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: center;
        }



    }

    .hidden {
        // display: none;
        padding: 1.5625rem;
        
        strong {
            color: $red;
        }

        p, div {
            margin-bottom: .5rem;
        }

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