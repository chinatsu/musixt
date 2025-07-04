import { UUID } from "crypto"

export interface IArtist {
    id: UUID,
    name: string
}

export interface IGenre {
    id: UUID,
    name: string
}

export interface IAlbum {
    id: UUID,
    title: string,
    artists: IArtist[],
    date: string,
    genres: IGenre[],
    url: string
    score: number,
    voters: number
}


export interface ISimilarGenre {
  id: UUID,
  name: string,
  count: number
}

export interface IGenreInfo {
    genre: IGenre,
    similar_genres: ISimilarGenre[],
    albums: IAlbum[]
}