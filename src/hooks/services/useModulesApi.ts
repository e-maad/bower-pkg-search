import { useCallback, useEffect, useRef } from "react";
import useCachedApi from "../useCachedApi";
import { ApiResponse, FetchModuleParams, Module } from "../types";
import { getSearchURL, mapSearchResult } from "../utils";

export default function useModulesApi() {
  const abortControllerRef = useRef<AbortController | null>(null);
  const { get } = useCachedApi<Module[]>();

  useEffect(() => {
    return () => {
      // Cleanup function to abort any pending requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const getModules = useCallback(
    async (params: FetchModuleParams): Promise<ApiResponse<Module[]>> => {
      // Abort any pending requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new abort controller
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      const url = getSearchURL(params);
      const data = await get(
        url,
        {
          signal: abortController.signal,
        },
        mapSearchResult
      );

      return {
        data,
      };
    },
    [get]
  );

  return { getModules };
}
