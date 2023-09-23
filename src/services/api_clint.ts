import axios, { AxiosRequestConfig } from "axios";

export interface FatchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fed14fccc67d4c669e6a91ed11e52ec5",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FatchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
