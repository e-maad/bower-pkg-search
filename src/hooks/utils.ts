import { config } from "../config";
import { FetchModuleParams, Module } from "./types";

export const getSearchURL = ({
  search: q,
  sortBy,
  itemsPerPage,
  page,
}: FetchModuleParams) => {
  const { apiKey: api_key, apiURL } = config;

  const searchParams = new URLSearchParams({
    q,
    per_page: itemsPerPage.toString(),
    page: page.toString(),
    api_key,
    ...(sortBy && { sort: sortBy.toString() }),
  });

  return `${apiURL}search?${searchParams}`;
};

export const mapSearchResult = (result: any[]): Module[] => {
  return result.map((item) => ({
    name: item.name,
    url: item.repository_url,
    description: item.description,
    owner: item.repository_url?.split("/").splice(-2, 1) || "",
    stars: item.stars,
    homepage: checkHomepageURL(item.homepage),
  }));
};

export const checkHomepageURL = (url: string) => {
  if (!url) return "";

  if (!/^(f|ht)tps?:\/\//i.test(url)) {
    url = "http://" + url;
  }
  return url;
};
