<template>
    <div :class="style.specification">
        <p>Amet minim molit non desurunt ulalamco est sit aliqua dolor do ame sint. 
            Velit officia consequat duis enim velt molit.Extrcitation viniam consequat sunt.</p>
            <div :class="style.features">
                <h3>Features</h3>
                <ul>
                    <li>
                        <div :class="style.challenge"></div>
                        <div>
                            <h4>A challenge for a true champion</h4>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </li>
                    <li>
                        <div :class="style.pilot"></div>
                        <div>
                            <h4>Pulot's sweaty hands</h4>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
import style from "../../assets/styles/components/vechical/vechicalSpec.scss?module"

export default {
    computed: {
        style(){
            return style
        }
    }
}
</script>