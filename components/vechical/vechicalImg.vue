<template>
    <div :class="style.vechicalImg">
        <img :src="info.image" alt="vechical">
    </div>
</template>

<script>
import style from "../../assets/styles/components/vechical/vechicalImg.scss?module"

export default {
    props: {
        info : {
            type: Object
        }
    },
    computed: {
        style(){
            return style
        }
    }
}
</script>
