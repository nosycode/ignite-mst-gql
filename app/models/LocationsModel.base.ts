/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { InfoModel, InfoModelType } from "./InfoModel"
import { InfoModelSelector } from "./InfoModel.base"
import { LocationModel, LocationModelType } from "./LocationModel"
import { LocationModelSelector } from "./LocationModel.base"
import { RootStoreType } from "./index"


/**
 * LocationsBase
 * auto generated base class for the model LocationsModel.
 */
export const LocationsModelBase = ModelBase
  .named('Locations')
  .props({
    __typename: types.optional(types.literal("Locations"), "Locations"),
    info: types.union(types.undefined, types.null, types.late((): any => InfoModel)),
    results: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => LocationModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LocationsModelSelector extends QueryBuilder {
  info(builder?: string | InfoModelSelector | ((selector: InfoModelSelector) => InfoModelSelector)) { return this.__child(`info`, InfoModelSelector, builder) }
  results(builder?: string | LocationModelSelector | ((selector: LocationModelSelector) => LocationModelSelector)) { return this.__child(`results`, LocationModelSelector, builder) }
}
export function selectFromLocations() {
  return new LocationsModelSelector()
}

export const locationsModelPrimitives = selectFromLocations()
