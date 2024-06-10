<script>
// import:


export default {
    nome: 'footerComponent',
    props: {

    },
    data() {
        return {
           logo: 'BOOLFLIX',
           credits: '© byHYONS™'

        }
    },
}

</script>


<!-- HTML -->
<template>

    <!-- footer -->
    <footer>

        <div class="footer">
            <div class="logo">

                <!-- logo brand -->
                <h4> {{ logo }} </h4>

            </div>
            <div class="credits">

                <!-- cretits -->
                <h5> {{ credits }} </h5>

            </div>
        </div>

    </footer>
    

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import:
@use '../assets/scss/partials/variables' as *;


footer {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6.25rem;
    background-color: $black;
    border-top: .15rem solid $red;
    align-content: center;
    

    .footer {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10;
    }

    h4 {
        font-size: 1.5rem;
        font-weight: 900;
        color: $text;
    }
    h5 {
        color: $text;
    }
}

</style>