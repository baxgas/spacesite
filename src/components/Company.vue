<template>
    <article class="company">
        <h2 class="subtitle">Company</h2>

        <div class="companycards">
            <div class="card ceo" @click="save(i)">
                <img src="../assets/elon_musk.jpg"  >
                <b>{{ changeceo ? changeceo : ceo }}</b>
                <span class="compinfos position">CEO</span>
            </div>
            <div class="card coo">
                <img src="../assets/Gwynne_Shotwell.jpg">
                <b>{{ coo }}</b>
                <span class="compinfos position">COO</span>
            </div>
            <div class="card cto">
                <img src="../assets/elon_musk.jpg">
                <b>{{ cto }}</b>
                <span class="compinfos position">CTO</span>
            </div>
            <div class="card cto-prop">
                <img src="../assets/tom-mueller-profile.jpg">
                <b>{{ cto_propulsion }}</b>
                <span class="position">CTO propulsion</span>
            </div>
        </div>

        <div class="companyinfos">
            <div class="card-elem">
                <img src="../assets/icon-1.png">
                <b>Employees:</b> 
                <span class="compinfos infoabout">{{ changeEmployees }}</span>
            </div>
            <div class="card-elem">
                <img src="../assets/icon-2.png">
                <b>Founded:</b>
                <span class="compinfos infoabout">{{ founded }}</span>
            </div>
            <div class="card-elem">
                <img src="../assets/icon-3.png">
                <b>Founder:</b>
                <span class="compinfos infoabout">{{ founder }}</span>
            </div>
        </div>

    </article>
</template>

<script>
export default {
name: "Companypart",
props: {
    ceo: String,
    cto: String,
    coo: String,
    cto_propulsion: String,
    founder: String,
    founded: Number,
    employees: Number,
    nameArray: Array,
},
data: function (){
    return {
        changeceo: this.ceo,
        i: 0
    }
},
computed: {
    members() {
        return this.$store.state.members;
    },
    changeEmployees: function() {
        return this.$store.state.employees + this.employees;
    }
},
methods: {
    save(i) {
        i = this.i;
        let num = 1;
        let nameArray = this.$store.state.members;
        nameArray[i].name = `${this.$store.state.members[i].name}`;
        i !== this.$store.state.members.length - 1 ? this.i++ : this.i = 0;
        
        this.$store.commit("mutateMember", nameArray[num]);
        this.changeceo = nameArray[i].name;
        this.$store.commit("employeeNum", num);
        // this.changeEmployees = this.employees + num;
        num++;
        // console.log( this.employe.changeEmployees );
        // console.log( nameArray );
        // console.log( i );          

    }
}

}
</script>

<style scoped>

.companycards {
    width: 100%;
    display: flex;
    text-align: center;
}

.companycards .card {
    width: 20%;
    background: rgb(232, 234, 234);
    margin: 0 2%;
    padding: 3% 1%;
    border-radius: 7px;
}

.companycards img {
    width: 70%;
    border-radius: 50%;
    margin-bottom: 10px;
}

.companycards b {
    display: block;
}

.compinfos {
    font-family: 'Roboto Mono', monospace;
}


.companyinfos {
    display: flex;
    margin-top: 7%;
    text-align: center;
    line-height: 1.5em;
}

.card-elem {
  text-align: center;
  width: 33%;
  border-left: 1px solid #e8eaea;
}

.card-elem:first-child {
  border-left: none;
}

.card-elem img {
    display: block;
    margin: 0 auto 15px;
    border: 1px solid #e8eaea;
    border-radius: 50%;
}

.card-elem b {
    display: block;
}

@media (max-width: 480px) {

.companycards {
    flex-wrap: wrap;
    justify-content: center;    
}

.companycards .card {
    width: 40%;
    margin: 0 2% 4%;
}

/* end 480 */
}

@media (max-width: 330px) {

.companycards .card {
    width: 80%;
    margin: 0 2% 6%;
    padding: 5%;
}

.companyinfos {
    flex-wrap: wrap;
    justify-content: center;
}

.card-elem {
    width: 90%;
    border-left: none;
    border-top: 1px solid #e8eaea;
    padding: 1em 0;
}

.card-elem:first-child {
    border-top: none;
}


/* end 330 */
}   


</style>