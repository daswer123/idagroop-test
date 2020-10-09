<template>
    <div :class="style.logo " >
      <nuxt-link to="/">
        <img src="../../static/logo.svg" alt="logo">
      </nuxt-link>
        <p :class="style.inspireText">World's first affordable airsharing</p>
    </div>
</template>

<script>
import style from "../../assets/styles/components/header/headerLogo.scss?module";
import {mapGetters} from "vuex"

export default {
  computed : {
    style(){
      return style
    },
    ...mapGetters(["getMode"]),
  }
}

</script>