<template>
    <section :class="style.popupLayout"  @click="closeByLayout($event)">
        <div :class="style.popup">
          <div :class="style.formTitle">
            <h2>Add new vehicle</h2>
            <button type="button" :class="style.close" @click="closeForm"></button>
          </div>
          <form action="#" @submit.prevent="onSubmit">
            <div :class="style.uploadFile">
              <div :class="style.innerUpload"></div>
            </div>
            <input type='text' v-model="name" name="name" id="name" placeholder="Name"/>
            <input type='text' v-model="description" name="description" id="desk" placeholder="Description"/>
            <input :class="style.rent"  v-model="rent" type='number' name="rent" id="rent" placeholder="Rent price"/>
            <button type="submit">Complete</button>
          </form>
        </div>
    </section>
</template>


<script>
import style from "../assets/styles/components/popup.scss?module";

export default {
  data() {
    return {
      name : "",
      description : "",
      rent : 100,
    }
  },

  computed : {
    style(){
      return style
    },
  },
  methods : {
    closeForm(){
      this.$store.dispatch("setEditMode");
      document.body.style.overflow = "auto";
      document.querySelector(".app").style.filter = "blur(0px)"
    },
    closeByLayout(e){
      if(e.target.classList.contains(style.popupLayout)){
        document.querySelector(".app").style.filter = "blur(0px)";
        document.body.style.overflow = "auto";
        this.$store.dispatch("setEditMode");
      }
    },
    onSubmit(){
      if (this.description === "" || this.name === "" || !rent){
        alert("Пожалуйтса заполните все данные")
        return
      }

      const data = {
        name : this.name,
        description : this.description,
        rent : this.rent,
        type : "custom",
        preview: "https://loremflickr.com/100/100/dog",
        image: "https://loremflickr.com/710/700/dog"
      }

      this.$store.dispatch("addNewVechical",data)
      this.$store.dispatch("getAllFiltersSync",data)

      document.body.style.overflow = "auto";
      document.querySelector(".app").style.filter = "blur(0px)"

      this.$store.dispatch("setEditMode");
      
    }
  }
}

</script>
