// import { useEffect, useState } from "react";
// import api_clint from "../services/api_clint";
// import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FatchGenreResponse {
//   count: number;
//   results: Genre[];
// }
const useGenres = () => useData<Genre>("/genres");
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
