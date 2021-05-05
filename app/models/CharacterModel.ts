import { Instance } from "mobx-state-tree"
import { CharacterModelBase } from "./CharacterModel.base"

/* The TypeScript type of an instance of CharacterModel */
export interface CharacterModelType extends Instance<typeof CharacterModel.Type> {}

/* A graphql query fragment builders for CharacterModel */
export { selectFromCharacter, characterModelPrimitives, CharacterModelSelector } from "./CharacterModel.base"

/**
 * CharacterModel
 */
export const CharacterModel = CharacterModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
