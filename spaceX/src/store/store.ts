import { createStore } from "vuex";
import type { SpaceXRocket } from "@/types/SpaceXRocket";
import type { SpaceXMission } from "@/types/SpaceXMission";
import type { SpaceXInfo } from "@/types/SpaceXInfo";
export interface State {
  rockets: SpaceXRocket[];
  missions: SpaceXMission[];
  description: SpaceXInfo;
}

const store = createStore<State>({
  state: {
    rockets: [],
    missions: [],
    description: { founder: "", summary: "" },
  },
  mutations: {
    setRockets(state, value) {
      state.rockets = value;
    },
    setMissions(state, value) {
      state.missions = value;
    },
    setDescription(state, value) {
      state.description = value;
    },
  },
});
export default store;
