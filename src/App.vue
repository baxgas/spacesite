<template>
<div id="app">

    <Headerpart :maintitle="name" :info="summary" :testsites="test_sites" :valuation="valuation" :vehicles="vehicles" />

  <section>

    <Companypart :ceo="ceo" :cto="cto" :coo="coo" :cto_propulsion="cto_propulsion"
      :founder="founder"   :founded="founded" :employees="employees" />

    <Headquarterspart :headquarters="headquarters" :links="links" :launch_sites="launch_sites" />

  </section>


</div>
</template>

<script>
import axios from 'axios'
import Headerpart from './components/Headerpart.vue'
import Companypart from './components/Company.vue'
import Headquarterspart from './components/Headquarters.vue'

const APIendpoint = "https://api.spacexdata.com/v3/info";

export default {
  name: 'App',
  components: {
    Headerpart, Companypart, Headquarterspart
  },
  data: function(){
    return {
      name: "",
      founder: "",
      founded: 0,
      employees: 0,
      vehicles: 0,
      launch_sites: 0,
      test_sites: 0,
      ceo: "",
      cto: "",
      coo: "",
      cto_propulsion: "",
      valuation: 0,
      headquarters: {},
      links: {},
      summary: ""
    }
  },
  mounted: function(){
    axios({
      url: APIendpoint,
      method: "get"
    })
    .then((response) => {

      /* Header and meta infos */
      this.name = response.data.name;
      this.summary = response.data.summary;
      document.title = this.name + " - " + this.summary.substring(0, this.summary.indexOf(".")) + ".";
      this.test_sites = response.data.test_sites;
      this.valuation = response.data.valuation;
      this.vehicles = response.data.vehicles;

      /* Company infos */
      this.ceo = response.data.ceo;
      this.cto = response.data.cto;
      this.coo = response.data.coo;
      this.cto_propulsion = response.data.cto_propulsion;
      this.founder = response.data.founder;
      this.founded = response.data.founded;
      this.employees = response.data.employees;

      /* Headquarters infos */
      this.headquarters = response.data.headquarters;
      this.links = response.data.links;
      this.launch_sites = response.data.launch_sites;

    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>
