/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { EpisodeModel, EpisodeModelType } from "./EpisodeModel"
import { EpisodeModelSelector } from "./EpisodeModel.base"
import { InfoModel, InfoModelType } from "./InfoModel"
import { InfoModelSelector } from "./InfoModel.base"
import { RootStoreType } from "./index"


/**
 * EpisodesBase
 * auto generated base class for the model EpisodesModel.
 */
export const EpisodesModelBase = ModelBase
  .named('Episodes')
  .props({
    __typename: types.optional(types.literal("Episodes"), "Episodes"),
    info: types.union(types.undefined, types.null, types.late((): any => InfoModel)),
    results: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => EpisodeModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class EpisodesModelSelector extends QueryBuilder {
  info(builder?: string | InfoModelSelector | ((selector: InfoModelSelector) => InfoModelSelector)) { return this.__child(`info`, InfoModelSelector, builder) }
  results(builder?: string | EpisodeModelSelector | ((selector: EpisodeModelSelector) => EpisodeModelSelector)) { return this.__child(`results`, EpisodeModelSelector, builder) }
}
export function selectFromEpisodes() {
  return new EpisodesModelSelector()
}

export const episodesModelPrimitives = selectFromEpisodes()
