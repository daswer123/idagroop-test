<template>
    <section :class="style.vechical">
        <VechicalImg v-bind:info="getVechical"/>
        <div>
            <VechicalContent v-bind:info="getVechical"/>
        </div>
    </section>
</template>


<script>
import style from "../assets/styles/components/vechical.scss?module";
import VechicalImg from "./vechical/vechicalImg";
import VechicalContent from "./vechical/vechicalContent";

export default {
  props: {
    id : {
      type : String
    }
  },

  computed : {
    style(){
      return style
    },
    getVechical(){
      return this.$store.getters.getOneVechical
    }
  },
  components : {
      VechicalImg,
      VechicalContent
  }
}

</script>
