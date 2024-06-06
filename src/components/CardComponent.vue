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
        'imageInfo'
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
            <p> <strong>Titolo originale:</strong> {{ titleOrig }} </p>
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
        </div>


    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;


.card {
    height: 23.75rem;
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
        

        img {
            margin-left: .3125rem;
            width: 1.375rem;
            vertical-align: middle;
        }
    }
}

</style>