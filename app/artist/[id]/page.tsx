import AlbumCard from '@/components/album';
import { IAlbum } from "@/app/types";


export default async function Artist({ params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const data = await fetch(`http://localhost:5000/artist/${id}`)
    const albums: IAlbum[] = await data.json()
    const artist = albums.at(0)?.artists.at(0)!!
    return (
        <div className="flex flex-col gap-2">
            <a href="/">Back to overview</a>
            <h1>Albums released by {artist.name}</h1>
            <div className="flex flex-col gap-2">
                {albums.map((album) => <AlbumCard key={album.id} album={album} />)}
            </div>
        </div>
    )
}