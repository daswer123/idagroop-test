<template>
  <ul :class="style.vechicalList">
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
      <VechicalItem/>
  </ul>
</template>

<script>
import style from "../../assets/styles/components/main/vechicalList.scss?module";
import VechicalItem from "./vechicalItem";

export default {
  computed : {
    style(){
      return style
    }
  },
  components : {
      VechicalItem
  }
}

</script>