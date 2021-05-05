import { Instance } from "mobx-state-tree"
import { EpisodesModelBase } from "./EpisodesModel.base"

/* The TypeScript type of an instance of EpisodesModel */
export interface EpisodesModelType extends Instance<typeof EpisodesModel.Type> {}

/* A graphql query fragment builders for EpisodesModel */
export { selectFromEpisodes, episodesModelPrimitives, EpisodesModelSelector } from "./EpisodesModel.base"

/**
 * EpisodesModel
 */
export const EpisodesModel = EpisodesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
