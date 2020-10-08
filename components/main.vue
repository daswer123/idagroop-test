<template>
    <div :class="style.vechicalShop">
        <section :class="style.listTop">
            <Select/>
            <AddNewVechical/>
        </section>
        <section class="vechical-list">
            <VechicalList/>
        </section>
    </div>
</template>

<script>
import style from "../assets/styles/components/main.scss?module";
import Select from "./main/select";
import AddNewVechical from "./main/addNewVechical";
import VechicalList from "./main/vechicalList";

export default {
  computed : {
    style(){
      return style
    }
  },
  components : {
      Select,
      AddNewVechical,
      VechicalList
  }
}

</script>

