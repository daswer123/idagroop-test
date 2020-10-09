<template>
  <button type="button" :class="style.addBtn" @click="openForm">
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
  methods : {
    openForm(){
      document.body.style.overflow = "hidden";
      document.querySelector(".app").style.filter = "blur(10px)"
      this.$store.dispatch("setEditMode");
      this.$store.dispatch("getAllFiltersSync");
    }
  }
}

</script>