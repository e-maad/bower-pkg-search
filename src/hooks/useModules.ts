import { useState } from "react";
import { FetchModuleParams, Module } from "./types";
import useModulesApi from "./services/useModulesApi";

export default function useModules() {
  const { getModules } = useModulesApi();
  const [modules, setModules] = useState<Module[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchModules = (params: FetchModuleParams) => {
    setLoading(true);
    getModules(params)
      .then((res) => {
        setError("");
        setModules(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err && err.name !== "AbortError") {
          setError(err.message);
          setModules([]);
          setLoading(false);
        }
      });
  };

  return {
    fetchModules,
    loading,
    modules,
    error,
  };
}
