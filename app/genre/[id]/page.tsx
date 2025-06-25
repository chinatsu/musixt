import AlbumCard from '@/components/album';
import GenreCard from "@/components/genre";
import { IAlbum, IGenre, IGenreInfo, ISimilarGenre } from "@/app/types";


export default async function Genre({ params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const data = await fetch(`http://localhost:5000/genre/${id}`)
  const genre_info: IGenreInfo = await data.json()
  const same_genre: ISimilarGenre = genre_info.similar_genres.filter(g => g.id == genre_info.genre.id).at(0)!!;
  const genre_display = String(genre_info.genre.name).charAt(0).toUpperCase() + String(genre_info.genre.name).slice(1);
  return (
    <section className="flex flex-col gap-2">
      <a href="/">Back to overview</a>
      <h1>About {genre_info.genre.name}</h1>
      <div className="flex flex-col gap-1">
        <h2>Similar genres</h2>
        <div className="flex flex-wrap gap-1">
          {
            genre_info.similar_genres.filter(g => g.id != genre_info.genre.id).map(g => <GenreCard key={`card-${g.id}`} id={g.id} title={`${g.name} (${(g.count / same_genre.count * 100).toFixed(2)}%)`}></GenreCard>)
          }
        </div>
      </div>
      <div>
        <h2>{genre_display} albums</h2>
        <div className="flex flex-col gap-2">
          {genre_info.albums.map((album) => <AlbumCard key={album.id} album={album} />)}
        </div>
      </div>
    </section>
  )
}