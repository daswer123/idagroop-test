<template>
<div>
  <div class="app" :class="style.app">
      <Header :class="style.header"/>
    <main>
      <Nuxt />
    </main>
  </div>
  <Popup v-if="getEditMode"/>
  </div>
</template>

<script>
import style from "../assets/styles/layout/default.scss?module";
import Header from "../components/header";
import Popup from "../components/popup";

export default {
  computed : {
    style(){
      return style
    },
    getEditMode(){
      return this.$store.getters.getEditMode
    }
  },
  components : {
    Header,
    Popup
  }
}

</script>
