<template>
    <div :class="style.team">
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <h3>Qualified specialists</h3>
        <ul>
            <li>
                <img src="../../static/team2.png" alt="team member">
                <div>
                 <h4>Marvin mc</h4>
                 <p>Pilot assistant</p>
                </div>
            </li>
            <li>
                <img src="../../static/team1.png" alt="team member">
                <div>
                    <h4>Savannah Nguyen</h4>
                    <p>Mechanic</p>
                </div>
                </li>
                <li>
                    <img src="../../static/team3.png" alt="team member">
                    <div>
                        <h4>Courtney Henry</h4>
                        <p>Pilot assistant</p>
                    </div>
                </li>
            </ul>
            <p :class="style.infoAfter">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
</template>

<script>
import style from "../../assets/styles/components/vechical/vechicalTeam.scss?module"

export default {
    computed: {
        style(){
            return style
        }
    }
}
</script>


                    