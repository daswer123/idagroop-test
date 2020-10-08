<template>
    <section :class="style.vechical">
        <VechicalImg/>
        <div>
            <VechicalContent/>
        </div>
    </section>
</template>


<script>
import style from "../assets/styles/components/vechical.scss?module";
import VechicalImg from "./vechical/vechicalImg";
import VechicalContent from "./vechical/vechicalContent";

export default {
  computed : {
    style(){
      return style
    }
  },
  components : {
      VechicalImg,
      VechicalContent
  }
}

</script>
