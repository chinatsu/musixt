import GenreCard from "./genre"
import { IAlbum } from "@/app/types"

export default async function AlbumCard({ album }: { album: IAlbum }) {
    return <div className="border rounded p-2">
        <div className="flex flex-col gap-1">
            <h3 className="text-lg">{album.title}</h3>
            <p className="flex gap-1 text-sm">By {album.artists.map(a => <span key={album.id + a.id}><a href={`/artist/${a.id}`}>{a.name}</a></span>)}</p>
            <p>Released <a href={`/date/${album.date}`}>{album.date}</a></p>
            <p>Score {album.score*2}/10</p>
            <div className="flex flex-wrap gap-1">
                {
                    album.genres.map(g =><GenreCard key={album.id + g.id} name={g.name} title={g.name}></GenreCard>)
                }
            </div>
            <a href={`https://${album.url}`}>Listen on Bandcamp</a>
        </div>
    </div>
}