import { Instance } from "mobx-state-tree"
import { LocationModelBase } from "./LocationModel.base"

/* The TypeScript type of an instance of LocationModel */
export interface LocationModelType extends Instance<typeof LocationModel.Type> {}

/* A graphql query fragment builders for LocationModel */
export { selectFromLocation, locationModelPrimitives, LocationModelSelector } from "./LocationModel.base"

/**
 * LocationModel
 */
export const LocationModel = LocationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
