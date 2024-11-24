import { genre } from './genre';

export interface video {
    id: string,
    name: string,
    albumCoverSrc: string,
    genre: genre,
    artist: string,
    decade: number
}