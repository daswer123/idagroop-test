<template>
    <div :class="style.logo">
        <img src="../../static/logo.svg" alt="logo">
        <p :class="style.inspireText">World's first affordable airsharing</p>
    </div>
</template>

<script>
import style from "../../assets/styles/components/header/headerLogo.scss?module";

export default {
  computed : {
    style(){
      console.log(style)
      return style
    }
  }
}

</script>