import { createStore } from "vuex";
import type { SpaceXRocket } from "@/types/SpaceXRocket";
import type { SpaceXMission } from "@/types/SpaceXMission";

export interface State {
  rockets: SpaceXRocket[];
  missions: SpaceXMission[];
}

const store = createStore<State>({
  state: {
    rockets: [],
    missions: [],
  },
  mutations: {
    setRockets(state, value) {
      state.rockets = value;
    },
    setMissions(state, value) {
      state.missions = value;
    },
  },
});
export default store;
