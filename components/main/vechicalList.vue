<template>
  <ul :class="style.vechicalList">
      <VechicalItem 
      v-for="vech in getVechicals" :key="vech.id"
      v-bind:vech="vech"/>
  </ul>
</template>

<script>
import style from "../../assets/styles/components/main/vechicalList.scss?module";
import VechicalItem from "./vechicalItem";

export default {
  computed : {
    style(){
      return style
    },
    getVechicals(){
      return this.$store.getters.getAllVechicals
    }
  },
  components : {
      VechicalItem
  }
}

</script>