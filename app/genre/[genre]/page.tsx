import AlbumCard from '@/components/album';
import GenreCard from "@/components/genre";
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
  const genre_title = decodeURI(genre)
  const genre_display = String(genre_title).charAt(0).toUpperCase() + String(genre_title).slice(1);
  return (
    <section className="flex flex-col gap-2">
      <a href="/">Back to overview</a>
      <h1>About {genre_title}</h1>
      <div className="flex flex-col gap-1">
        <h2>Similar genres</h2>
        <div className="flex flex-wrap gap-1">
          {
            similar_genres.filter(g => g.name != genre_title).map(g => <GenreCard key={`card-${g.id}`} name={g.name} title={`${g.name} (${(g.count / same_genre.count * 100).toFixed(2)}%)`}></GenreCard>)
          }
        </div>
      </div>
      <div>
        <h2>{genre_display} albums</h2>
        <div className="flex flex-col gap-2">
          {albums.map((album) => <AlbumCard key={album.id} album={album} />)}
        </div>
      </div>
    </section>
  )
}