// import { useEffect, useState } from "react";
// import api_clint from "../services/api_clint";
// import { CanceledError } from "axios";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FatchResponse } from "../services/api_clint";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FatchGenreResponse {
//   count: number;
//   results: Genre[];
// }
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FatchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
// {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     api_clint
//       .get<FatchGenreResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         // console.log(res.data.results);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };

export default useGenres;
