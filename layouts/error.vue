<template>
    <div :class="style.error">
        <h1>An error has occurred</h1>
        <p>Please refresh the page</p>
        <button @click="reload" type="button">Reload page</button>
    </div>
</template>

<script>
import style from "../assets/styles/components/404.scss?module";


export default {
  computed : {
    style(){
      return style
    }
  },
  methods : {
      reload(){
          window.location.reload(true)
      }
  }
}

</script>