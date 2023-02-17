import { defineStore, acceptHMRUpdate } from "pinia";
import type { SpaceXRocket } from "@/types/SpaceXRocket";
import type { SpaceXMission } from "@/types/SpaceXMission";
import type { SpaceXInfo } from "@/types/SpaceXInfo";

export const useStore = defineStore("spacexstore", {
  state: () => ({
    rockets: [] as SpaceXRocket[],
    missions: [] as SpaceXMission[],
    description: { founder: "", summary: "" } as SpaceXInfo,
    error: "" as string,
  }),
  actions: {
    async getDescription() {
      try {
        if (this.description.summary === "") {
          const data = await fetch("https://api.spacexdata.com/v3/info");
          if (!data.ok) {
            throw Error("No data available");
          }
          this.description = await data.json();
        }
      } catch (err: any) {
        this.error = err.message;
        console.log(err);
      }
    },
    async getAllRockets() {
      try {
        if (this.rockets.length === 0) {
          const data = await fetch("https://api.spacexdata.com/v3/rockets");
          if (!data.ok) {
            throw Error("No data available");
          }
          this.rockets = await data.json();
        }
      } catch (err: any) {
        this.error = err.message;
        console.log(err);
      }
    },
    async getAllMissions() {
      try {
        if (this.missions.length === 0) {
          const data = await fetch("https://api.spacexdata.com/v3/missions");
          if (!data.ok) {
            throw Error("No data available");
          }
          this.missions = await data.json();
        }
      } catch (err: any) {
        this.error = err.message;
        console.log(err);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
