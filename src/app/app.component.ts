import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { VideoPlayerComponent } from "./video-player/video-player.component";
import { VideoService } from './video.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { video } from '../assets/video';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { genre } from '../assets/genre';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    CommonModule,
    VideoPlayerComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatSliderModule,
    MatRadioModule,
    MatSelectModule,
],
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dialog = inject(MatDialog);

  isLoggedIn: boolean;
  isGameInProgress: boolean;
  isRoundInProgress: boolean;
  isGameOver: boolean;

  // !! section that is added by YY
  isSearched: boolean = true;
  searchedSongs: video[] = [];
  
  searchOption: boolean = true;
  searchOptionValue:string;
  diffMode: string;
  setGuessTimer: number;
  guessTimer: number; 
  interval: any;
  timeStarted: boolean = false;
  //  ^^ section that is added by YY


  userName: string;
  albumCoverSrc: string;
  videoId: string;
  guess: string;
  filterMode: string;

  score: number;
  currentIndex: number;
  numberOfRounds: number;
  secondsPerRound: number;

  currentSong: video;
  songList: video[];
  guesses: any;
  genres: any;
  decades: any;
  selectedGenre: genre;
  selectedDecade: number;

  constructor(
    private readonly authService: AuthService,
    private readonly videoService: VideoService
  ) {
    this.userName = '';
    this.albumCoverSrc = '';
    this.videoId = '';
    this.guess = 'asdf';
    this.score = 0;
    this.currentIndex = 0;
    this.numberOfRounds = 5;
    // this.secondsPerRound = 3; 
    this.searchOptionValue = 'on'; // YY
    this.diffMode = 'easy'; // YY 
    this.setGuessTimer =  30; // YY
    this.secondsPerRound = 10; // YY
    this.guessTimer = this.setGuessTimer; // YY
    this.filterMode = 'decade';
    this.selectedDecade = 2000;
    this.selectedGenre = genre.AltRock;
    this.songList = this.videoService.getSongs();
    this.guesses = [];
    this.genres = [
      {
        value: genre.AltRock,
        viewValue: 'Rock / Alternative Rock'
      },
      {
        value: genre.Rap,
        viewValue: 'Rap'
      },
      {
        value: genre.Pop,
        viewValue: 'Pop'
      }
    ];
    this.decades = [
      {
        value: 2000,
        viewValue: '2000s'
      },
      {
        value: 2010,
        viewValue: '2010s'
      },
      {
        value: 2020,
        viewValue: '2020s'
      }
    ];
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent);
    this.isLoggedIn = true;

    dialogRef.afterClosed().subscribe((result) => {
      let userName = this.authService.authenticateCredentials(result);
      if (userName !== null) {
        this.isLoggedIn = true;
        this.userName = userName;
      }
    });
  }

  startGame() {
    this.resetGameVariables();
    this.score = 0;
    this.isGameInProgress = true;
    this.isRoundInProgress = true;
    this.isGameOver = false;
    this.filterSongs();
    this.searchOptionControl(); // YY 

    this.playSong(this.currentIndex);
    setTimeout(() => {
      this.isRoundInProgress = false;
    }, this.secondsPerRound * 1000);
    if (!this.timeStarted) {
      this.startTimer()
      this.guessTimer = this.setGuessTimer;
      this.timeStarted = true;
    } else {
      this.guessTimer = this.setGuessTimer;
    }

  }

  playSong(index) {
    this.videoId = this.songList[index].id;
    this.albumCoverSrc = this.songList[index].albumCoverSrc;
    this.currentSong = this.songList[index];
    this.currentIndex += 1;
  }

  submitGuess() {
    let currSongName = this.currentSong.name;
    this.guesses.push({
      round: this.currentIndex,
      guess: this.guess ? this.guess : ' ',
      artist: this.currentSong.artist,
      title: this.currentSong.name
    });
    if (this.guess.toLowerCase().trim() === currSongName.toLowerCase().trim()) {
      this.score += 1;
    }
    console.log('timer at: ' + this.guessTimer);
    this.startNextRound();
  }

  // !! section that is added by YY
  startTimer() {
    console.log(this.guessTimer);
    this.interval = setInterval(() => {
      if(this.guessTimer > 0) {
        console.log(this.guessTimer);
        this.guessTimer--;
      } else {
        console.log('time is done, current index: ' + this.currentIndex + ' out of ' + this.numberOfRounds + ' so far');
        this.submitGuess();
      }
    },1000);
  }

  searchSong() {
    this.searchedSongs = [];
    console.log('searchsong : ' + this.guess)
    this.songList.forEach((forSongSearch: video, index) => {
      if ( forSongSearch.name.toLowerCase().includes(this.guess.toLowerCase()) )
        this.searchedSongs.push(forSongSearch)
    })
    this.isSearched = true;
  }

  selectSearchedSong(name:string) {
    this.guess = name;
  }

  stopGame() {
    this.isRoundInProgress = true;
    this.isGameInProgress = false;
    this.currentIndex = 0;
    this.guess = '';
  }

  searchOptionControl() {
    if (this.searchOptionValue === 'on') {
      this.searchOption = true;
    } else if (this.searchOptionValue === 'off') {
      this.searchOption = false;
    }
  }

  // ^^ section that is added by YY

  startNextRound() {
    this.guessTimer = this.setGuessTimer; // YY
    if (this.currentIndex < this.numberOfRounds) {
      this.searchedSongs = []; // YY
      this.isSearched = false; // YY
      this.isRoundInProgress = true;
      this.guess = '';
      this.playSong(this.currentIndex);
      setTimeout(() => {
        this.isRoundInProgress = false;
      }, this.secondsPerRound * 1000);
    } else {
      this.endGame();
    }
  }

  endGame() {
    this.isGameOver = true;
    this.isGameInProgress = false;
  }

  resetGameVariables() {
    this.songList = this.videoService.getSongs();
    this.currentIndex = 0;
    this.guesses = [];
    this.guess = '';
    this.searchedSongs = []; // YY
    this.isSearched = false; // YY
  }

  filterSongs() {
    if (this.filterMode === 'decade') {
      this.songList = this.songList.filter((elem) => elem.decade === this.selectedDecade);
    } else {
      this.songList = this.songList.filter((elem) => elem.genre === this.selectedGenre);
    }
    this.songList = this.songList.sort((a,b) => 0.5 - Math.random());
  }
}