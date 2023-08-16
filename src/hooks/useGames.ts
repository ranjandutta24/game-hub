import React, { useEffect, useState } from "react";
import api_clint from "../services/api_clint";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FatchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    api_clint
      .get<FatchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        // console.log(games);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
