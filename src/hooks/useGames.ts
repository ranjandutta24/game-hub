// import React, { useEffect, useState } from "react";
// import api_clint from "../services/api_clint";
// import { CanceledError } from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";

import { Genre } from "./useGenres";
import APIClient, { FatchResponse } from "../services/api_clint";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FatchGameResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FatchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

// {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     api_clint
//       .get<FatchGameResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
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

//   return { games, error, isLoading };
// };

export default useGames;
