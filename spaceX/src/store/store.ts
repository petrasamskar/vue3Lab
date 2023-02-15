import { createStore } from "vuex";
import type { SpaceXRocket } from "@/types/SpaceXRocket";

export interface State {
    rockets: SpaceXRocket[]
}

const store = createStore<State>( {
    state: {
        rockets: [],        
    },
    mutations: {
        setRockets(state, value) {
            state.rockets = value
        }
    },
    getters: {
        rockets: state => state.rockets
    }
})
export default store