import AlbumCard from "../components/album";
import { IAlbum } from "./types";

export const dynamic = 'force-dynamic'
export default async function Home() {
  const data = await fetch('https://music-api.girlypop.no/')
  const albums: IAlbum[] = await data.json()
  return (
    <div className="flex flex-col gap-2">
      <h1>
        Albums released in 2025!
      </h1>
      {albums.map((album) => <AlbumCard key={album.id} album={album} />)}
    </div>
  )
}