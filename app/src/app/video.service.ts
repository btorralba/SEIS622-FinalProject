import { Injectable } from '@angular/core';
import { video } from '../assets/video';
import { genre } from '../assets/genre';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  songs: video[] = [];

  constructor() {
    this.songs = [
      {
        id: 'j8tZs6G_h7U',
        name: 'Mr Brightside',
        artist: 'The Killers',
        genre: genre.AltRock,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/1/17/The_Killers_-_Hot_Fuss.png'
      },
      {
        id: 'IbFXME2CZ1g',
        name: 'Fat Lip',
        artist: 'Sum 41',
        genre: genre.AltRock,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/3/30/Sum_41_All_Killer_No_Filler.jpg'
      },
      {
        id: 'V3soG5njoNw',
        name: 'I Write Sins Not Tragedies',
        artist: 'Panic! At The Disco',
        genre: genre.AltRock,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/e/e2/PanicAtTheDisco-FeverCover.jpg'
      },
      {
        id: 'SU9Fm2bqZTo',
        name: 'Sugar, We\'re Goin Down',
        artist: 'Fall Out Boy',
        genre: genre.AltRock,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/0/00/Fall_Out_Boy_-_From_Under_the_Cork_Tree_-_CD_album_cover.jpg'
      },
      {
        id: 'Sn0gVjPrUj0',
        name: 'All The Small Things',
        artist: 'Blink-182',
        genre: genre.AltRock,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg'
      },
      {
        id: 'H3axP4norfk',
        name: 'In Da Club',
        artist: '50 Cent',
        genre: genre.Rap,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Get_Rich_Or_Die_Tryin%27.JPG'
      },
      {
        id: 'pSCjVNTos8U',
        name: 'Stronger',
        artist: 'Kanye West',
        genre: genre.Rap,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg'
      },
      {
        id: 'lCPdtMbw7zg',
        name: 'Ignition (Remix)',
        artist: 'R. Kelly',
        genre: genre.Rap,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/e/e6/RKellyTheRInRAndBGreatestHitsCollectionVolume1CDAlbumCover.jpg'
      },
      {
        id: 'rkqMbsmLrtA',
        name: 'The Real Slim Shady',
        artist: 'Eminem',
        genre: genre.Rap,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/The_Marshall_Mathers_LP_second_cover.jpg/220px-The_Marshall_Mathers_LP_second_cover.jpg'
      },
      {
        id: 'V8gvSEtzOQg',
        name: 'Empire State of Mind',
        artist: 'Jay-Z (feat. Alicia Keys)',
        genre: genre.Rap,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Jay-Z_-_The_Blueprint_3.jpg'
      },
      {
        id: 'o5iw2ifoHnw',
        name: 'Umbrella',
        artist: 'Rhianna (feat. Jay-Z)',
        genre: genre.Pop,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Good_Girl_Gone_Bad.png'
      },
      {
        id: '0wsTogFALXg',
        name: 'Single Ladies',
        artist: 'Beyonce',
        genre: genre.Pop,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png'
      },
      {
        id: 'K9udREBvMdE',
        name: 'Hot N Cold',
        artist: 'Katy Perry',
        genre: genre.Pop,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Katy_Perry_-_One_of_the_Boys.png'
      },
      {
        id: 'MBm6ji5mWlU',
        name: 'Party in the USA',
        artist: 'Miley Cyrus',
        genre: genre.Pop,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/6/60/The_Time_of_Our_Lives_EP.png'
      },
      {
        id: 'BvJSig2WhnY',
        name: 'Poker Face',
        artist: 'Lady Gaga',
        genre: genre.Pop,
        decade: 2000,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/4/45/The_Fame_Monster.png'
      },
      {
        id: 'ZN0CEkJ_ZtI',
        name: 'Royals',
        artist: 'Lorde',
        genre: genre.Pop,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Lorde_Pure_Heroine.png'
      },
      {
        id: 'vJao1u2uBqY',
        name: 'Radioactive',
        artist: 'Imagine Dragons',
        genre: genre.Pop,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Night_Visions_Album_Cover.jpeg'
      },
      {
        id: 'yJ_1y3iNvwc',
        name: 'Rolling in the Deep',
        artist: 'Adele',
        genre: genre.Pop,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png'
      },
      {
        id: 'u7XjPmN-tHw',
        name: 'Just The Way You Are',
        artist: 'Bruno Mars',
        genre: genre.Pop,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Bruno_Mars_-_Doo-Wops_%26_Hooligans.png'
      },
      {
        id: 'O1TFUEMzTvE',
        name: 'New Rules',
        artist: 'Dua Lipa',
        genre: genre.Pop,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/2/20/Dua_Lipa_%28album%29.png'
      },
      {
        id: 'mtXjDa61_Fs',
        name: 'Congratulations',
        artist: 'Post Malone',
        genre: genre.Rap,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Stoneyalbum.jpg/220px-Stoneyalbum.jpg'
      },
      {
        id: 'pPKx-fon1nY',
        name: 'God\'s Plan',
        artist: 'Drake',
        genre: genre.Rap,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'
      },
      {
        id: 'f2YWfeFRZO0',
        name: 'SICKO MODE',
        artist: 'Travis Scott',
        genre: genre.Rap,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Travis_Scott_-_Astroworld.png'
      },
      {
        id: '1AM_VSfudig',
        name: 'Trap Queen',
        artist: 'Fetty Wap',
        genre: genre.Rap,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Fetty_Wap_%E2%80%93_Fetty_Wap.png'
      },
      {
        id: '_fh64GbFSw4',
        name: 'Lucid Dreams',
        artist: 'Juice WRLD',
        genre: genre.Rap,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/8/86/Goodbye_%26_Good_Riddance_Album_Cover.jpg'
      },
      {
        id: '9g5m3z24jJM',
        name: 'We Are Young',
        artist: 'Fun. (feat. Janelle Monae)',
        genre: genre.AltRock,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/4/46/Fun_-_Some_Nights_album_cover.png'
      },
      {
        id: 'ilLEuwH4hws',
        name: 'Pompeii',
        artist: 'Bastille',
        genre: genre.AltRock,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/0/09/Bastille_-_Bad_Blood_%28Album%29.png'
      },
      {
        id: '08WiUcJmnZc',
        name: 'Sweater Weather',
        artist: 'The Neighbourhood',
        genre: genre.AltRock,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Iloveyou_the_neighbourhood.jpeg'
      },
      {
        id: '0DOv0-2yyfE',
        name: 'Pumped Up Kicks',
        artist: 'Foster The People',
        genre: genre.AltRock,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Torches_foster_the_people.jpg'
      },
      {
        id: 'j31r0WSWrSU',
        name: 'Cigarette Daydreams',
        artist: 'Cage The Elephant',
        genre: genre.AltRock,
        decade: 2010,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Cage_the_Elephant_Melophobia.jpg'
      },
      {
        id: 'aezstCBHOPQ',
        name: 'Too Sweet',
        artist: 'Hozier',
        genre: genre.AltRock,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Hozier_-_Unreal_Unearth.png'
      },
      {
        id: 'byfiQA8HRaE',
        name: 'Good 4 U',
        artist: 'Olivia Rodrigo',
        genre: genre.AltRock,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Olivia_Rodrigo_-_SOUR.png'
      },
      {
        id: '5dT-sGmImjc',
        name: 'abcdefu',
        artist: 'GAYLE',
        genre: genre.AltRock,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Gayle_-_ABCDEFU_%28higher_resolution%29.png'
      },
      {
        id: 'wc-hOtVgCso',
        name: 'Monsters',
        artist: 'All Time Low',
        genre: genre.AltRock,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Wake_Up_Sunshine_All_Time_Low.jpg/220px-Wake_Up_Sunshine_All_Time_Low.jpg'
      },
      {
        id: '9e2buqBpSBU',
        name: 'Bang!',
        artist: 'AJR',
        genre: genre.AltRock,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/b/bf/AJR_-_OK_Orchestra.png'
      },
      {
        id: '4QGqFfhKWYo',
        name: 'The Box',
        artist: 'Roddy Ricch',
        genre: genre.Rap,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Roddy_Ricch_-_Please_Excuse_Me_for_Being_Antisocial.png'
      },
      {
        id: '-eSeEt88zDc',
        name: 'Rockstar',
        artist: 'DaBaby',
        genre: genre.Rap,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/9/98/Dababy_BabyOnBaby.jpg'
      },
      {
        id: 'LSr2KWqjx3w',
        name: 'That Way',
        artist: 'Lil Uzi Vert',
        genre: genre.Rap,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Eternal_Atake_Lil_Uzi_Vert.jpg'
      },
      {
        id: '3OUdeW4HmgE',
        name: 'FE!N',
        artist: 'Travis Scott (feat. Playboi Carti)',
        genre: genre.Rap,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/2/23/Travis_Scott_-_Utopia.png'
      },
      {
        id: 'YT8OXit9IVA',
        name: 'What Happened to Virgil',
        artist: 'Lil Durk (feat. Gunna)',
        genre: genre.Rap,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/8/80/Lil_Durk_-_7220.png'
      },
      {
        id: 'Amsbv8GlEBk',
        name: 'Say So',
        artist: 'Doja Cat',
        genre: genre.Pop,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Doja_Cat_-_Hot_Pink.png/220px-Doja_Cat_-_Hot_Pink.png'
      },
      {
        id: 'nsXwi67WgOo',
        name: 'Montero',
        artist: 'Lil Nas X',
        genre: genre.Pop,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Lil_Nas_X_-_Montero.png/220px-Lil_Nas_X_-_Montero.png'
      },
      {
        id: 'Yl_thbk40A0',
        name: 'Please Please Please',
        artist: 'Sabrina Carpenter',
        genre: genre.Pop,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/5/55/Sabrina_Carpenter_-_Please_Please_Please.png'
      },
      {
        id: '_z-OebesFSA',
        name: 'A Bar Song',
        artist: 'Shaboozey',
        genre: genre.Pop,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/2/26/Shaboozey_-_A_Bar_Song_%28Tipsy%29.png'
      },
      {
        id: '81HxBlmg7T0',
        name: 'Last Night',
        artist: 'Morgan Wallen',
        genre: genre.Pop,
        decade: 2020,
        albumCoverSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Morgan_Wallen_-_One_Thing_at_a_Time.png/220px-Morgan_Wallen_-_One_Thing_at_a_Time.png'
      },
    ]
  }

  getSongs() {
    return this.songs;
  }
}
