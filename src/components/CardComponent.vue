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

        <p> {{ card.title }} </p>

    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>


.card {
    height: 150px;
    width: 70px;
}

</style>