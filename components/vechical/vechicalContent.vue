<template>
<section :class="style.vechicalContent">
            <h2>XR-74 "Copper"</h2>
            <ul :class="style.contentType">
                <li><button v-on:click="changeContentType(1)" v-bind:class="{active: contentType == 1}" type="button">Specifications</button></li>
                <li><button v-on:click="changeContentType(2)" v-bind:class="{active: contentType == 2}" type="button" >Team</button></li>
                <li><button v-on:click="changeContentType(3)" v-bind:class="{active: contentType == 3}" type="button" >Rent terms</button></li>
            </ul>
            <section :class="style.info">
                <VechicalSpec v-if="contentType == 1"/>
                <VechicalTeam v-if="contentType == 2"/>
                <VechicalRent v-if="contentType == 3"/>                
        </section>
        <VechicalPrice/>
</section>
</template>


<script>
import style from "../../assets/styles/components/vechical/vechicalContent.scss?module";
import VechicalPrice from "./vechicalPrice";
import VechicalRent from "./vechicalRent";
import VechicalSpec from "./vechicalSpec";
import VechicalTeam from "./vechicalTeam";

export default {
    computed: {
        style(){
            return style
        }
    },
    data() {
        return {
            contentType : 1
        }
    },
    methods : {
        changeContentType : function(id){
            this.contentType = id
        }
    },
    components: {
        VechicalPrice,
        VechicalRent,
        VechicalSpec,
        VechicalTeam
    }
}
</script>