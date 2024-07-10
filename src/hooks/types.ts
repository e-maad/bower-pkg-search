export interface Module {
  name: string;
  url: string;
  description: string;
  owner: string;
  stars: string;
  homepage: string;
}

export interface FetchModuleParams {
  sortBy?: keyof Module;
  search: string;
  page: number;
  itemsPerPage: number;
}

export interface ApiResponse<Type> {
  data: Type;
}
