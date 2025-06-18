import { PageBlock } from "@navikt/ds-react/Page";
import AlbumCard from "./components/album";
import { VStack } from "@navikt/ds-react";
import { IAlbum } from "./types";


export default async function Home() {
  const data = await fetch('http://localhost:5000/')
  const albums: IAlbum[] = await data.json()
  return (
    <main>
      <PageBlock width="md" gutters>
        <VStack gap="2">
          {albums.map((album) => <AlbumCard key={album.id} album={album} />)}
        </VStack>
      </PageBlock>
    </main>
  )
}