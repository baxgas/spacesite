<template>
<header>
  <div class="titlepart">
    <h1 class="maintitle">{{ maintitle }}</h1>
    <div class="infos">{{ info }}</div>    
  </div>
  <div class="card">
    <div class="card-elem"><b>Test sites:</b><span class="compinfos">{{ testsites }}</span></div>
    <div class="card-elem"><b>Valuation:</b><span class="compinfos">{{ valuation }}</span></div>
    <div class="card-elem"><b>Vehicles:</b><span class="compinfos">{{ vehicles }}</span></div>
  </div>
</header>

</template>

<script>
export default {
  name: 'Headerpart',
  props: {
    maintitle: String,
    info: String,
    testsites: Number,
    valuation: Number,
    vehicles: Number,
  }
}
</script>

<style scoped>
header {
    background: url("../assets/header-back.jpg") no-repeat center black;
    background-size: cover;
    text-align: center;
    color: white;
    padding: 50px 0 0;
    margin-bottom: 50px;
    display: block;
}

h1.maintitle {
  font-size: 3em;
  margin: 0.3em;
}

.infos, .compinfos {
    font-family: 'Roboto Mono', monospace;
}

.infos {
    font-size: 1.2em;
    line-height: 1.5em;
    width: 95%;
    max-width: 700px;
    margin: auto;
}

.card {
  background: white;
  top: 50px;
  max-width: 700px;
  width: 95%;
  color: black;
  display: flex;
  box-shadow: 0px 0px 4px 2px #00000070;
  border-radius: 10px;
  text-align: center;
  position: relative;
  margin: auto;
  padding: 1.3em 0.5em;
  font-size: 1.2em;
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

.card-elem b {
  display: block;
}

@media (max-width: 480px) {

.card {
  display: block;
  width: 75%;
  padding: 2% 5%;
}

.card-elem {
  border-left: none;
  width: 100%;
  border-top: 1px solid #e8eaea;
  padding: 0.5em 0;
}

.card-elem:first-child {
  border-top: none;
}


/* end 480 */
}


</style>