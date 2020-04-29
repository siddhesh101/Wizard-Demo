import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedComponent: 'FirstPage',
        data: {
            SP: {
                btn : null
            },
            TP: {
                email: '',
                name: '',
                food: null,
                checked: []
            }
        }
    }
});