import Link from "next/link";
import AlbumCard from "../../../components/album";
import { IAlbum } from "@/app/types";


export default async function Date({ params,
}: {
    params: Promise<{ date: string }>
}) {
    const { date } = await params
    const data = await fetch(`http://localhost:5000/date/${date}`)
    const albums: IAlbum[] = await data.json()
    return (
        <section className="flex flex-col gap-2">
            <Link href="/">Back to overview</Link>
            <h1>Albums released {date}</h1>
            <div className="flex flex-col gap-2">
                {albums.map((album) => <AlbumCard key={album.id} album={album} />)}
            </div>
        </section>
    )
}