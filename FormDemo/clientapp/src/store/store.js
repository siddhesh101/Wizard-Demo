import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedComponent: 'FirstPage',
        TestData: '',
        data: {
            SP: {
                btn : null
            },
            TP: {
                email: '',
                name: '',
                food: null,
                checked: []
            },
            FOP: {
                company: '',
                add: '',
                salary: null,
                checked: []
            }
        }
    },
    mutations: {
        updateTP(state,form) {
            state.data.TP.email = form.email
            state.data.TP.name = form.name
            state.data.TP.food = form.food
            state.data.TP.checked = form.checked
        },
        updateFOP(state,form) {
            state.data.FOP.company = form.company
            state.data.FOP.add = form.add
            state.data.FOP.salary = form.salary
            state.data.FOP.checked = form.checked
        }    
    },
	plugins: [createPersistedState()]
});