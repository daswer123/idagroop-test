<template>
  <button type="button" :class="style.addBtn">
      <span>Add new</span>
      <div></div>
  </button>
</template>

<script>
import style from "../../assets/styles/components/main/addNewVechical.scss?module";

export default {
  computed : {
    style(){
      return style
    }
  },
}

</script>