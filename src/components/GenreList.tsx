import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
  const { genres, error } = useGenres();

  return (
    <ul>
      {error && <Text>{error}</Text>}
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
