import React, { useEffect, useState } from "react";
import api_clint from "../services/api_clint";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FatchGameResponse {
  count: number;
  results: Game[];
}
let show = false;
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    api_clint
      .get<FatchGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        show = true;
        // console.log(games);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
