import { defineStore } from "pinia";
import type { SpaceXRocket } from "@/types/SpaceXRocket";
import type { SpaceXMission } from "@/types/SpaceXMission";
import type { SpaceXInfo } from "@/types/SpaceXInfo";

export const useStore = defineStore("spacexstore", {
  state: () => ({
    rockets: [] as SpaceXRocket[],
    missions: [] as SpaceXMission[],
    description: { founder: "", summary: "" } as SpaceXInfo,
  }),
  actions: {
    setRockets(rockets: SpaceXRocket[]) {
      this.rockets = rockets;
    },
    setMissions(missions: SpaceXMission[]) {
      this.missions = missions;
    },
    setDescription(description: SpaceXInfo) {
      this.description = description;
    },
  },
});
