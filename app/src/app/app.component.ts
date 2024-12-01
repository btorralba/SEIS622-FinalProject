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
    MatSelectModule
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
  isSearched: boolean = true; // bool to indicate something has been searched for ngIf in html
  searchedSongs: video[] = []; // an array that is pushed with songs based on name match, and then displayed in html
  difficultyStandard: number[] = [10, 20, 30, 60, 100] // an array parallel for difficultyNames
  difficultyNames: string[] = ['Easy', 'Normal', 'Intermtediate', 'Hard', 'Legendary'] // an array parellel for difficultyStandard
  difficultyBooleanArray: boolean[]; // an array will be checked to see which index has updated ot true
  searchOption: boolean = true; // search option is initialized as enabled
  searchOptionValue: string; // string value for switching search option on/off from radio-button
  setGuessTimer: number; // number value stored to give guessTimer the set guess time
  guessTimer: number;  // number value that will be decremented and referenced to be shown in html
  interval: any; // an object that will be defined as an interval object
  timeStarted: boolean = false; // a bool to indicate a game has started for decrementing guessTimer
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
    this.guess = '';
    this.score = 0;
    this.currentIndex = 0;
    this.numberOfRounds = 5;
    // this.secondsPerRound = 3; temporarily commenting this ans I am redefining it below for the difficulty selector
    this.difficultyBooleanArray = [false, false, false, false, false] // initializing all to false
    this.searchOptionValue = 'on'; // initializing that search option is enabled
    this.setGuessTimer = 30; // initializing the guess time is 30 (Easy). an updated value is later retrieved with radiobutton in settings
    this.secondsPerRound = 10; // initializing the song played per second is 10 (easy). an updated value is later retrieved with radiobutton in settings
    this.guessTimer = this.setGuessTimer; // initaliazting the guess timer that will be decremented and displayed in html
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
    this.calculateDifficulty();
  }
  login() {
    const dialogRef = this.dialog.open(LoginComponent);
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
    this.startNextRound();
  }
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
    this.songList = this.songList.sort((a, b) => 0.5 - Math.random());
  }

  // !! section that is added by YY
  startTimer() { // function that is called at startGame and ansychronously decrements throughout the game.
    // only displayed when the song has finished playing. (currently 3 seconds short)
    console.log(this.guessTimer);
    this.interval = setInterval(() => {
      if (this.guessTimer > 0) {
        console.log(this.guessTimer);
        this.guessTimer--;
      } else {
        console.log('time is done, current index: ' + this.currentIndex + ' out of ' + this.numberOfRounds + ' so far');
        this.submitGuess();
      }
    }, 1000);
  }
  searchSong() { // searches for song from video service
    this.searchedSongs = [];
    console.log('searchsong : ' + this.guess)
    this.songList.forEach((forSongSearch: video, index) => {
      if (forSongSearch.name.toLowerCase().includes(this.guess.toLowerCase()))
        this.searchedSongs.push(forSongSearch)
    })
    this.isSearched = true;
  }
  selectSearchedSong(name: string) { // highlights the searched songs, to be copied in input textbox
    this.guess = name;
  }
  stopGame() { // stops the game from a stop button
    this.isRoundInProgress = true;
    this.isGameInProgress = false;
    this.currentIndex = 0;
    this.guess = '';
  }
  searchOptionControl() { // when search option is enabled, updates the search option value to later reflect in html
    // currently does not work good
    if (this.searchOptionValue === 'on') {
      console.log('pressed search option enable on')
      this.searchOption = true;
    } else {// (this.searchOptionValue === 'off') {
      console.log('pressed search option enable off')
      this.searchOption = false;
    }
    console.log('pressed search option, now: ' + this.searchOption)
    this.calculateDifficulty()
  }
  calculateDifficulty() { // calculates what the difficulty is based on:
    // search option, song played per second, guess time per second
    this.difficultyBooleanArray = [false, false, false, false, false]
    let totalPoints: number = 0;
    if (!this.searchOption) {
      totalPoints = totalPoints + 20;
    }
    console.log('total points search option: ' + totalPoints)
    if (this.secondsPerRound == 3) {
      totalPoints = totalPoints + 20;
    } else if (this.secondsPerRound > 3 && this.secondsPerRound < 7) {
      totalPoints = totalPoints + 15;
    } else if (this.secondsPerRound > 6 && this.secondsPerRound < 10) {
      totalPoints = totalPoints + 10;
    } else if (this.secondsPerRound > 9) {
      totalPoints = totalPoints + 5;
    }
    console.log('total points seconds per round: ' + totalPoints)
    if (this.setGuessTimer == 10) {
      totalPoints = totalPoints + 30;
    } else if (this.setGuessTimer > 10 && this.setGuessTimer < 15) {
      totalPoints = totalPoints + 20;
    } else if (this.setGuessTimer > 14 && this.setGuessTimer < 20) {
      totalPoints = totalPoints + 15;
    } else if (this.setGuessTimer > 19 && this.setGuessTimer < 25) {
      totalPoints = totalPoints + 10;
    } else if (this.setGuessTimer > 24 && this.setGuessTimer < 30) {
      totalPoints = totalPoints + 5;
    } else if (this.setGuessTimer > 29) {
      totalPoints = totalPoints + 0;
    }
    console.log('total points guess timer: ' + totalPoints)
    let returnCounter: number = 0;
    let previousNumber: number = 0;
    this.difficultyStandard.forEach((difficultyNumber: number, index) => {
      if (totalPoints > previousNumber && totalPoints <= difficultyNumber) {
        returnCounter = index;
        console.log('total points matched between current number: ' + difficultyNumber + ' previous number: ' + previousNumber)
        this.difficultyBooleanArray[index] = true;
      }
      previousNumber = difficultyNumber;
    })
    console.log(returnCounter)
    console.log(this.difficultyNames[returnCounter])
    return returnCounter;
  }
  // ^^ section that is added by YY

  getGenreViewValue(selectedGenre: genre): string {
    return (this.genres.find((g) => g.value === selectedGenre)).viewValue;
  }
  getDecadeViewValue(selectedDecade: number): string {
    return (this.decades.find((d) => d.value === selectedDecade)).viewValue;
  }

}