<template>
    <div :class="style.rent">
        <p>{{rent}}</p>
        <p :class="style.moreContent">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <h4>Additional conditions:</h4>
        <ul>
            <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.</li>
            <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
            <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
        </ul>
    </div>
</template>

<script>
import style from "../../assets/styles/components/vechical/vechicalRent.scss?module";

export default {
    props: {rent : {
        type : String
    }},
    computed: {
        style(){
            return style
        }
    }
}
</script>