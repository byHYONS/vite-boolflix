<script>
// istanza vue:
export default {
    nome: 'cardComponent',
    props: {
        card: String,
    },
    data() {
        return {
          

        }
    },
    
}

</script>


<!-- HTML -->
<template>

    <div class="card">

        <p v-show=""> <strong>Titolo:</strong> {{ card.name }} </p>
        <p> <strong>Titolo originale:</strong> {{ card.title }} </p>
        <p> <strong>lingua:</strong> {{ card.title }} </p>
        <p> <strong>Voto:</strong> {{ card.title }} </p>

    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>


.card {
    height: 150px;
    width: 70px;
}

</style>