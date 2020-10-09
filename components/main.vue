<template>
<section>
  <div v-if="getError" class="error">
    <Error/>
  </div>
    <div v-else :class="style.vechicalShop">
        <section :class="style.listTop">
            <Select/>
            <AddNewVechical/>
        </section>
        <section class="vechical-list">
            <VechicalList/>
        </section>
    </div>
  </section>
</template>

<script>
import style from "../assets/styles/components/main.scss?module";
import Select from "./main/select";
import AddNewVechical from "./main/addNewVechical";
import VechicalList from "./main/vechicalList";
import Error from "./404";

export default {
  data : () => {
    return {
      error: true
    }
  },
  computed : {
    style(){
      return style
    },
    getError(){
      return this.$store.getters.getErrorState
    },
  },
  components : {
      Select,
      AddNewVechical,
      VechicalList,
      Error
  }
}

</script>

