import { Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
  const { data, error } = useGenres();

  return (
    <ul>
      {error && <Text>{error}</Text>}
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
