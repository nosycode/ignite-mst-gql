/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CharacterModel, CharacterModelType } from "./CharacterModel"
import { CharacterModelSelector } from "./CharacterModel.base"
import { InfoModel, InfoModelType } from "./InfoModel"
import { InfoModelSelector } from "./InfoModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  results: IObservableArray<CharacterModelType>;
}

/**
 * CharactersBase
 * auto generated base class for the model CharactersModel.
 */
export const CharactersModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Characters')
  .props({
    __typename: types.optional(types.literal("Characters"), "Characters"),
    info: types.union(types.undefined, types.null, types.late((): any => InfoModel)),
    results: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CharacterModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CharactersModelSelector extends QueryBuilder {
  info(builder?: string | InfoModelSelector | ((selector: InfoModelSelector) => InfoModelSelector)) { return this.__child(`info`, InfoModelSelector, builder) }
  results(builder?: string | CharacterModelSelector | ((selector: CharacterModelSelector) => CharacterModelSelector)) { return this.__child(`results`, CharacterModelSelector, builder) }
}
export function selectFromCharacters() {
  return new CharactersModelSelector()
}

export const charactersModelPrimitives = selectFromCharacters()
