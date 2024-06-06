<script>
// istanza vue:
export default {
    nome: 'cardComponent',
    props: [
        'title',
        'titleOrig',
        'language',
        'vote'
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
        <div v-else-if="language === 'al'">
            <strong>lingua: </strong> 
            <img src="../../public/flags/al.svg" alt="language">
        </div>
        <div v-else> 
            <strong>lingua:</strong> {{ language }} 
        </div>

    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>


.card {
    height: 150px;
    width: 70px;
    img {
        margin-left: .3125rem;
        width: 1.375rem;
        vertical-align: middle;
    }
}

</style>