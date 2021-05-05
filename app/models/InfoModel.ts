import { Instance } from "mobx-state-tree"
import { InfoModelBase } from "./InfoModel.base"

/* The TypeScript type of an instance of InfoModel */
export interface InfoModelType extends Instance<typeof InfoModel.Type> {}

/* A graphql query fragment builders for InfoModel */
export { selectFromInfo, infoModelPrimitives, InfoModelSelector } from "./InfoModel.base"

/**
 * InfoModel
 */
export const InfoModel = InfoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
