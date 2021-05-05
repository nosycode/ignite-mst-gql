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
  residents: IObservableArray<CharacterModelType>;
}

/**
 * LocationBase
 * auto generated base class for the model LocationModel.
 */
export const LocationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Location')
  .props({
    __typename: types.optional(types.literal("Location"), "Location"),
    /** The id of the location. */
    id: types.identifier,
    /** The name of the location. */
    name: types.union(types.undefined, types.null, types.string),
    /** The type of the location. */
    type: types.union(types.undefined, types.null, types.string),
    /** The dimension in which the location is located. */
    dimension: types.union(types.undefined, types.null, types.string),
    /** List of characters who have been last seen in the location. */
    residents: types.union(types.undefined, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CharacterModel))))),
    /** Time at which the location was created in the database. */
    created: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LocationModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get type() { return this.__attr(`type`) }
  get dimension() { return this.__attr(`dimension`) }
  get created() { return this.__attr(`created`) }
  residents(builder?: string | CharacterModelSelector | ((selector: CharacterModelSelector) => CharacterModelSelector)) { return this.__child(`residents`, CharacterModelSelector, builder) }
}
export function selectFromLocation() {
  return new LocationModelSelector()
}

export const locationModelPrimitives = selectFromLocation().name.type.dimension.created
