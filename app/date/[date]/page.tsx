import { PageBlock } from "@navikt/ds-react/Page";
import AlbumCard from "../../components/album";
import { Heading, HStack, VStack } from "@navikt/ds-react";
import { IAlbum } from "@/app/types";


export default async function Date({ params,
}: {
    params: Promise<{ date: string }>
}) {
    const { date } = await params
    const data = await fetch(`http://localhost:5000/date/${date}`)
    const albums: IAlbum[] = await data.json()
    return (
        <main>
            <PageBlock width="md" gutters>
                <VStack gap="2">
                    <Heading size="large">Albums released {date}</Heading>
                    <VStack gap="2">
                        {albums.map((album) => <AlbumCard key={album.id} album={album} />)}
                    </VStack>
                </VStack>
            </PageBlock>
        </main>
    )
}