import { PageBlock } from "@navikt/ds-react/Page";
import AlbumCard from "../../components/album";
import { Heading, HStack, VStack } from "@navikt/ds-react";
import GenreCard from "@/app/components/genre";
import { IAlbum, ISimilarGenre } from "@/app/types";


export default async function Genre({ params,
}: {
  params: Promise<{ genre: string }>
}) {
  const { genre } = await params
  const data = await fetch(`http://localhost:5000/genre/${genre}`)
  const albums: IAlbum[] = await data.json()
  const genreData = await fetch(`http://localhost:5000/genre/similar/${genre}`)
  const similar_genres: ISimilarGenre[] = await genreData.json()
  const same_genre: ISimilarGenre = similar_genres.at(0)!!
  const genre_title = genre.replaceAll("%20", " ")
  const genre_display = String(genre_title).charAt(0).toUpperCase() + String(genre_title).slice(1);
  return (
    <main>
      <PageBlock width="md" gutters>
        <VStack gap="2">
          <Heading size="large">About {genre_title}</Heading>
          <VStack gap="2">
            <Heading size="medium">Similar genres</Heading>
            <HStack gap="2">
              {
                similar_genres.filter(g => g.name != genre_title).map(g => <GenreCard key={`card-${g.id}`} name={g.name} title={`${g.name} (${(g.count / same_genre.count * 100).toFixed(2)}%)`}></GenreCard>)
              }
            </HStack>
          </VStack>
          <HStack gap="2">
            <Heading size="medium">{genre_display} albums</Heading>
            <VStack gap="2">
              {albums.map((album) => <AlbumCard key={album.id} album={album} />)}
            </VStack>
          </HStack>
        </VStack>
      </PageBlock>
    </main>
  )
}