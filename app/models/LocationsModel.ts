import { Instance } from "mobx-state-tree"
import { LocationsModelBase } from "./LocationsModel.base"

/* The TypeScript type of an instance of LocationsModel */
export interface LocationsModelType extends Instance<typeof LocationsModel.Type> {}

/* A graphql query fragment builders for LocationsModel */
export { selectFromLocations, locationsModelPrimitives, LocationsModelSelector } from "./LocationsModel.base"

/**
 * LocationsModel
 */
export const LocationsModel = LocationsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
