<template>
    <Main/>
</template>

<script>
// import style from "../assets/styles/components/main.scss?module";
import Main from "../components/main";

export default {
  components : {  
      Main,
  },
  async mounted(){
    await this.$store.dispatch("fetchVechicals");
  },
}

</script>