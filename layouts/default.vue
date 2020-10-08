<template>
  <div class="app" :class="style.app">
      <Header/>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import style from "../assets/styles/layout/default.scss?module";
import Header from "../components/header";

export default {
  computed : {
    style(){
      return style
    }
  },
  components : {
    Header
  }
}

</script>
