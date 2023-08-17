import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
// import useData from "../hooks/useData";

const GenereList = () => {
  const { data } = useGenres();
  //   const { data } = useData<Genre>("/genres");
  return (
    <ul>
      {data.map((genre, i) => (
        <li key={i}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
