import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import { createStore } from 'vuex'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from "./components/UI/BaseDialog";
import Activities from "./components/activities/TheActivities";
import Welcome from "./components/welcome/Welcome";
import ChargingStations from "./components/chargingstations/TheChargingStations";

const store = createStore({
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
            return state.counter * 2;
        }
    }
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/aktiviteter', component: Activities},
        {path: '/', component: Welcome },
        {path: '/ladestasjoner', component: ChargingStations }
    ]
})


const app = createApp(App)
app.use(store)
app.use(router)
app.component('base-card',BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)


app.mount('#app')
