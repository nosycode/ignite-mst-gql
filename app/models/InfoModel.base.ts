/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * InfoBase
 * auto generated base class for the model InfoModel.
 */
export const InfoModelBase = ModelBase
  .named('Info')
  .props({
    __typename: types.optional(types.literal("Info"), "Info"),
    /** The length of the response. */
    count: types.union(types.undefined, types.null, types.integer),
    /** The amount of pages. */
    pages: types.union(types.undefined, types.null, types.integer),
    /** Number of the next page (if it exists) */
    next: types.union(types.undefined, types.null, types.integer),
    /** Number of the previous page (if it exists) */
    prev: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class InfoModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get pages() { return this.__attr(`pages`) }
  get next() { return this.__attr(`next`) }
  get prev() { return this.__attr(`prev`) }
}
export function selectFromInfo() {
  return new InfoModelSelector()
}

export const infoModelPrimitives = selectFromInfo().count.pages.next.prev
