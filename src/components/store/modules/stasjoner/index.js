import mutations from './mutations';
import actions from './actions.js';
import getters from './getters.js';

export default {
    state() {
        return {
            stasjoner: []
        }
    },
    mutations,
    actions,
    getters
}