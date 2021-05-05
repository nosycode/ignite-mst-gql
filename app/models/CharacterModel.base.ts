/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { EpisodeModel, EpisodeModelType } from "./EpisodeModel"
import { EpisodeModelSelector } from "./EpisodeModel.base"
import { LocationModel, LocationModelType } from "./LocationModel"
import { LocationModelSelector } from "./LocationModel.base"
import { RootStoreType } from "./index"


/**
 * CharacterBase
 * auto generated base class for the model CharacterModel.
 */
export const CharacterModelBase = ModelBase
  .named('Character')
  .props({
    __typename: types.optional(types.literal("Character"), "Character"),
    /** The id of the character. */
    id: types.identifier,
    /** The name of the character. */
    name: types.union(types.undefined, types.null, types.string),
    /** The status of the character ('Alive', 'Dead' or 'unknown'). */
    status: types.union(types.undefined, types.null, types.string),
    /** The species of the character. */
    species: types.union(types.undefined, types.null, types.string),
    /** The type or subspecies of the character. */
    type: types.union(types.undefined, types.null, types.string),
    /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
    gender: types.union(types.undefined, types.null, types.string),
    /** The character's origin location */
    origin: types.union(types.undefined, types.null, types.late((): any => LocationModel)),
    /** The character's last known location */
    location: types.union(types.undefined, types.null, types.late((): any => LocationModel)),
    /** Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars. */
    image: types.union(types.undefined, types.null, types.string),
    /** Episodes in which this character appeared. */
    episode: types.union(types.undefined, types.array(types.union(types.null, types.late((): any => EpisodeModel)))),
    /** Time at which the character was created in the database. */
    created: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CharacterModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get status() { return this.__attr(`status`) }
  get species() { return this.__attr(`species`) }
  get type() { return this.__attr(`type`) }
  get gender() { return this.__attr(`gender`) }
  get image() { return this.__attr(`image`) }
  get created() { return this.__attr(`created`) }
  origin(builder?: string | LocationModelSelector | ((selector: LocationModelSelector) => LocationModelSelector)) { return this.__child(`origin`, LocationModelSelector, builder) }
  location(builder?: string | LocationModelSelector | ((selector: LocationModelSelector) => LocationModelSelector)) { return this.__child(`location`, LocationModelSelector, builder) }
  episode(builder?: string | EpisodeModelSelector | ((selector: EpisodeModelSelector) => EpisodeModelSelector)) { return this.__child(`episode`, EpisodeModelSelector, builder) }
}
export function selectFromCharacter() {
  return new CharacterModelSelector()
}

export const characterModelPrimitives = selectFromCharacter().name.status.species.type.gender.image.created
