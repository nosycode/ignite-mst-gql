import { Instance } from "mobx-state-tree"
import { CharactersModelBase } from "./CharactersModel.base"

/* The TypeScript type of an instance of CharactersModel */
export interface CharactersModelType extends Instance<typeof CharactersModel.Type> {}

/* A graphql query fragment builders for CharactersModel */
export { selectFromCharacters, charactersModelPrimitives, CharactersModelSelector } from "./CharactersModel.base"

/**
 * CharactersModel
 */
export const CharactersModel = CharactersModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
