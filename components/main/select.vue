<template>
  <div :class="style.arrow">
    <select :class="style.select" size="1">
      <option></option>
        <option>Свойство 1</option>
        <option>Свойство 2</option>
    </select>
    </div>
</template>

<script>
import style from "../../assets/styles/components/main/select.scss?module";

export default {
  computed : {
    style(){
      return style
    }
  },
}

</script>