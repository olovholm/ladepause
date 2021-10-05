import {createStore} from "vuex";
import authModule from './modules/auth/index.js'
import stasjonerModule from "./modules/stasjoner/index.js";


const store = createStore({
    modules: {
        auth: authModule,
        stasjoner: stasjonerModule
    },
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state){
            state.counter = state.counter + 1
        },
        increase(state, number) {
            state.counter = state.counter + number.value
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter;
        }
    }
})

export default store