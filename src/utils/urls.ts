import type { Urls } from "../types/url-types";

export const URLS: Urls = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
} as const;
