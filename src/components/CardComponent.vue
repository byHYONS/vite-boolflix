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
        <p> <strong>lingua:</strong> {{ language }} </p>
        <p> <strong>Voto:</strong> {{ vote }} </p>

    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>


.card {
    height: 150px;
    width: 70px;
}

</style>