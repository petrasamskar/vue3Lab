import { createStore } from "vuex";
import type { SpaceXRocket } from "@/types/SpaceXRocket";

export interface State {
    rockets: SpaceXRocket[]
}

export const store = createStore<State>( {
    state: {
        rockets: [],        
    }
})