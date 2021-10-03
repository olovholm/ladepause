import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import store from './components/store/index.js'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from "./components/UI/BaseDialog";
import Activities from "./components/pages/activities/TheActivities";
import Welcome from "./components/pages/welcome/Welcome";
import ChargingStations from "./components/pages/chargingstations/TheChargingStations";
import UserAuth from "./components/pages/auth/UserAuth";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/aktiviteter', component: Activities},
        {path: '/', component: Welcome },
        {path: '/ladestasjoner', component: ChargingStations },
        {path: '/auth', component: UserAuth }
    ]
})


const app = createApp(App)
app.use(store)
app.use(router)
app.component('base-card',BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)


app.mount('#app')
