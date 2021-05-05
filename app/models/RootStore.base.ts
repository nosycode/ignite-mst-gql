/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { CharacterModel, CharacterModelType } from "./CharacterModel"
import { characterModelPrimitives, CharacterModelSelector } from "./CharacterModel.base"
import { LocationModel, LocationModelType } from "./LocationModel"
import { locationModelPrimitives, LocationModelSelector } from "./LocationModel.base"
import { EpisodeModel, EpisodeModelType } from "./EpisodeModel"
import { episodeModelPrimitives, EpisodeModelSelector } from "./EpisodeModel.base"
import { CharactersModel, CharactersModelType } from "./CharactersModel"
import { charactersModelPrimitives, CharactersModelSelector } from "./CharactersModel.base"
import { InfoModel, InfoModelType } from "./InfoModel"
import { infoModelPrimitives, InfoModelSelector } from "./InfoModel.base"
import { LocationsModel, LocationsModelType } from "./LocationsModel"
import { locationsModelPrimitives, LocationsModelSelector } from "./LocationsModel.base"
import { EpisodesModel, EpisodesModelType } from "./EpisodesModel"
import { episodesModelPrimitives, EpisodesModelSelector } from "./EpisodesModel.base"



export type FilterCharacter = {
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
}
export type FilterLocation = {
  name?: string
  type?: string
  dimension?: string
}
export type FilterEpisode = {
  name?: string
  episode?: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  characters: ObservableMap<string, CharacterModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryCharacter="queryCharacter",
queryCharacters="queryCharacters",
queryCharactersByIds="queryCharactersByIds",
queryLocation="queryLocation",
queryLocations="queryLocations",
queryLocationsByIds="queryLocationsByIds",
queryEpisode="queryEpisode",
queryEpisodes="queryEpisodes",
queryEpisodesByIds="queryEpisodesByIds"
}


/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Character', () => CharacterModel], ['Location', () => LocationModel], ['Episode', () => EpisodeModel], ['Characters', () => CharactersModel], ['Info', () => InfoModel], ['Locations', () => LocationsModel], ['Episodes', () => EpisodesModel]], ['Character'], "js"))
  .props({
    characters: types.optional(types.map(types.late((): any => CharacterModel)), {})
  })
  .actions(self => ({
    // Get a specific character by ID
    queryCharacter(variables: { id: string }, resultSelector: string | ((qb: CharacterModelSelector) => CharacterModelSelector) = characterModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ character: CharacterModelType}>(`query character($id: ID!) { character(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CharacterModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get the list of all characters
    queryCharacters(variables: { page?: number, filter?: FilterCharacter }, resultSelector: string | ((qb: CharactersModelSelector) => CharactersModelSelector) = charactersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ characters: CharactersModelType}>(`query characters($page: Int, $filter: FilterCharacter) { characters(page: $page, filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new CharactersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get a list of characters selected by ids
    queryCharactersByIds(variables: { ids: string[] }, resultSelector: string | ((qb: CharacterModelSelector) => CharacterModelSelector) = characterModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ charactersByIds: CharacterModelType[]}>(`query charactersByIds($ids: [ID!]!) { charactersByIds(ids: $ids) {
        ${typeof resultSelector === "function" ? resultSelector(new CharacterModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get a specific locations by ID
    queryLocation(variables: { id: string }, resultSelector: string | ((qb: LocationModelSelector) => LocationModelSelector) = locationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ location: LocationModelType}>(`query location($id: ID!) { location(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new LocationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get the list of all locations
    queryLocations(variables: { page?: number, filter?: FilterLocation }, resultSelector: string | ((qb: LocationsModelSelector) => LocationsModelSelector) = locationsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ locations: LocationsModelType}>(`query locations($page: Int, $filter: FilterLocation) { locations(page: $page, filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new LocationsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get a list of locations selected by ids
    queryLocationsByIds(variables: { ids: string[] }, resultSelector: string | ((qb: LocationModelSelector) => LocationModelSelector) = locationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ locationsByIds: LocationModelType[]}>(`query locationsByIds($ids: [ID!]!) { locationsByIds(ids: $ids) {
        ${typeof resultSelector === "function" ? resultSelector(new LocationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get a specific episode by ID
    queryEpisode(variables: { id: string }, resultSelector: string | ((qb: EpisodeModelSelector) => EpisodeModelSelector) = episodeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ episode: EpisodeModelType}>(`query episode($id: ID!) { episode(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new EpisodeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get the list of all episodes
    queryEpisodes(variables: { page?: number, filter?: FilterEpisode }, resultSelector: string | ((qb: EpisodesModelSelector) => EpisodesModelSelector) = episodesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ episodes: EpisodesModelType}>(`query episodes($page: Int, $filter: FilterEpisode) { episodes(page: $page, filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new EpisodesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get a list of episodes selected by ids
    queryEpisodesByIds(variables: { ids: string[] }, resultSelector: string | ((qb: EpisodeModelSelector) => EpisodeModelSelector) = episodeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ episodesByIds: EpisodeModelType[]}>(`query episodesByIds($ids: [ID!]!) { episodesByIds(ids: $ids) {
        ${typeof resultSelector === "function" ? resultSelector(new EpisodeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
  })))
