import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { getUser, useAuth } from "../hooks";
const BASE_URL = process.env.REACT_APP_ROOT_API;
const KEY_API = process.env.REACT_APP_API_KEY;
console.log(KEY_API, BASE_URL);
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
axiosInstance.interceptors.request.use(
  async (config) => {
    const user = getUser();
    if (user) {
      config.headers["Authorization"] = `Client-ID ${KEY_API}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

type useAxiosProps = {
  api: {
    path: string | unknown;
    method: "get" | "post" | "delete" | "patch" | "put";
  };
  headers?: string | null;
  onSuccess: (res: AxiosResponse) => void;
  onError: (err: AxiosError) => void;
};

const useAxios = ({ api, onError, onSuccess }: useAxiosProps) => {
  const [loading, setloading] = useState(false);

  const call = (body?: unknown, params?: unknown, ...args: unknown[]) => {
    setloading(true);
    const apiConfig = { ...api };

    // Replace the dynamic path parameters with the actual values from args
    apiConfig.path = args.reduce(
      (path, arg, index) =>
        (path as string).replace(`:${index + 1}`, String(arg)),
      apiConfig.path
    );
    axiosInstance[api.method](
      api.path + (args.length ? "/" + args.join("/") : ""),
      { body: body ?? "", params }
    )
      .then((res) => {
        onSuccess(res);
      })
      .catch((err) => {
        console.log(err);
        onError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return { call, loading };
};

export { useAxios, axiosInstance };
