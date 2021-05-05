/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CharacterModel, CharacterModelType } from "./CharacterModel"
import { CharacterModelSelector } from "./CharacterModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  characters: IObservableArray<CharacterModelType>;
}

/**
 * EpisodeBase
 * auto generated base class for the model EpisodeModel.
 */
export const EpisodeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Episode')
  .props({
    __typename: types.optional(types.literal("Episode"), "Episode"),
    /** The id of the episode. */
    id: types.identifier,
    /** The name of the episode. */
    name: types.union(types.undefined, types.null, types.string),
    /** The air date of the episode. */
    air_date: types.union(types.undefined, types.null, types.string),
    /** The code of the episode. */
    episode: types.union(types.undefined, types.null, types.string),
    /** List of characters who have been seen in the episode. */
    characters: types.union(types.undefined, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CharacterModel))))),
    /** Time at which the episode was created in the database. */
    created: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class EpisodeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get air_date() { return this.__attr(`air_date`) }
  get episode() { return this.__attr(`episode`) }
  get created() { return this.__attr(`created`) }
  characters(builder?: string | CharacterModelSelector | ((selector: CharacterModelSelector) => CharacterModelSelector)) { return this.__child(`characters`, CharacterModelSelector, builder) }
}
export function selectFromEpisode() {
  return new EpisodeModelSelector()
}

export const episodeModelPrimitives = selectFromEpisode().name.air_date.episode.created
