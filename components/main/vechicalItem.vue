<template>
  <li :class="style.vechicalItem">
      <nuxt-link to="/vechical">
        <img src='../../static/fly.png'>
        <div class="content">
            <h2>XR-74 "Copper"</h2>
            <p :class="style.desk">Brief description of the project, in a few lines</p>
            <p :class="style.price">1 278 $/h</p>
        </div>
      </nuxt-link>
  </li>
</template>

<script>
import style from "../../assets/styles/components/main/vechicalItem.scss?module";

export default {
  computed : {
    style(){
      return style
    }
  },
}

</script>