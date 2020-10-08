<template>
    <section :class="style.buy">
        <h3>Rent for <span>164 $/h</span></h3>
        <button type="button">Rent now</button>
    </section>
</template>


<script>
import style from "../../assets/styles/components/vechical/vechicalPrice.scss?module";

export default {
    computed: {
        style(){
            return style
        }
    },
}
</script>