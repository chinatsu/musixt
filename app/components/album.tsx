import { Box, Detail, Heading, HStack, Link, Tag, VStack } from "@navikt/ds-react"

import GenreCard from "./genre"
import { IAlbum } from "../types"

export default async function AlbumCard({ album }: { album: IAlbum }) {
    return <Box
        background="surface-default"
        padding="6"
        borderRadius="xlarge"
        borderColor="border-subtle"
        borderWidth="1"
    >
        <VStack gap="1">
            <Heading size="small">{album.title}</Heading>
            <Detail>{album.artists.map(a => <span key={album.id + a.id}>{a.name}</span>)}</Detail>
            <Detail>Released <Link href={`/date/${album.date}`}>{album.date}</Link></Detail>
            <HStack gap="2">
                {
                    album.genres.map(g =><GenreCard key={album.id + g.id} name={g.name} title={g.name}></GenreCard>)
                }
            </HStack>
            <Link href={`https://${album.url}`}>Listen on Bandcamp</Link>
        </VStack>
    </Box>
}