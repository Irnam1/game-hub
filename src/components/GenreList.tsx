import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres.ts";
import getCroppedImageUrl from "../services/image-url.ts";

const GenreList = () => {
  const { data, error } = useGenres();

  return (
    <List spacing={3}>
      {error && <Text>{error}</Text>}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              objectFit="cover"
              boxSize={45}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg" paddingInline={3}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
