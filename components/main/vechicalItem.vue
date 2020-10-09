<template>
  <li :class="style.vechicalItem">
      <a href="#" @click.prevent="openVechical( vech.id )">
        <img :src="vech.preview">
        <div class="content">
            <h2>{{ vech.name }}</h2>
            <p :class="style.desk">{{ vech.description }}</p>
            <p :class="style.price">{{ vech.rent }} $/h</p>
        </div>
      </a>
  </li>
</template>

<script>
import style from "../../assets/styles/components/main/vechicalItem.scss?module";

export default {
  props: {
    vech : {
      type: Object
    }
    },
  computed : {
    style(){
      return style
    }
  },
  methods : {
    async openVechical(id){
      this.$store.dispatch("fetchOneVechical",id);
      this.$router.push("/vechical/"+id)
    }
  }
}

</script>