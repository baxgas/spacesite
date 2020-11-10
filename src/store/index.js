import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({

state: {
    members: [],
    employees: 0
},
actions: {
    async getMembers(context) {
        (await axios.get("https://jsonplaceholder.typicode.com/users")).data.forEach(m => context.commit("initialiseMember", m));
    } 
},
mutations: {
    initialiseMember(currentState, member) {
        currentState.members.push(member);
    },
    mutateMember(currentState, member) {
        let index = currentState.members.findIndex(m => m.id == member.id);
        Vue.set(currentState.members, index, member);
    },
    employeeNum(currentState, number) {
        currentState.employees = currentState.employees + number;
    }
}

})