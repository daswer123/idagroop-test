<template>
    <div :class="style.vechicalImg">
        <img src="../../static/vechical.jpg" alt="vechical">
    </div>
</template>

<script>
import style from "../../assets/styles/components/vechical/vechicalImg.scss?module"

export default {
    computed: {
        style(){
            return style
        }
    }
}
</script>
