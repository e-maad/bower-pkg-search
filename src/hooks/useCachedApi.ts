import { useCallback } from "react";

export default function useCachedApi<T>() {
  const get = useCallback(
    async (
      url: string,
      options: RequestInit,
      mapper: (data: any) => T
    ): Promise<T> => {
      if (sessionStorage.getItem(url)) {
        return JSON.parse(sessionStorage.getItem(url) || "") as T;
      }

      const res = await fetch(url, options);
      const data = await res.json();
      const mappedData = mapper(data);
      sessionStorage.setItem(url, JSON.stringify(mappedData));
      return mappedData;
    },
    []
  );

  return { get };
}
