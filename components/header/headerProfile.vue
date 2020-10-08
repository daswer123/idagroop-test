<template>
        <div :class="style.profile">
            <p>Bessie Copper </p>
            <img src="../../static/avatar.png" alt="user avatar">
        </div>
</template>

<script>
import style from "../../assets/styles/components/header/headerProfile.scss?module";

export default {
  computed : {
    style(){
      return style
    }
  }
}

</script>