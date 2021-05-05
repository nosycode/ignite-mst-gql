import { Instance } from "mobx-state-tree"
import { EpisodeModelBase } from "./EpisodeModel.base"

/* The TypeScript type of an instance of EpisodeModel */
export interface EpisodeModelType extends Instance<typeof EpisodeModel.Type> {}

/* A graphql query fragment builders for EpisodeModel */
export { selectFromEpisode, episodeModelPrimitives, EpisodeModelSelector } from "./EpisodeModel.base"

/**
 * EpisodeModel
 */
export const EpisodeModel = EpisodeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
