<template>
  <div :class="style.arrow">
    <select :class="style.select" size="1" @change="setFilter($event)">
      <option></option>
      <option v-for="key in getAllFilter" :value="key" :key="key.id">{{key}}</option>
    </select>
    </div>
</template>

<script>
import style from "../../assets/styles/components/main/select.scss?module";
import {mapGetters} from 'vuex';

export default {
  
  async mounted(){
    await this.$store.dispatch("getAllFilters");
  },
  computed : {
    style(){
      return style
    },
    ...mapGetters(["getAllFilter"])
  },
  methods: {
    setFilter(e){
      const value = e.target.value
      this.$store.dispatch("chooseFilter",value)
    }
  }
}

</script>