import AlbumCard from "../components/album";
import { IAlbum } from "./types";


export default async function Home() {
  const data = await fetch('http://localhost:5000/')
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