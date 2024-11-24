import { Component, Input } from '@angular/core';
import {YouTubePlayer} from '@angular/youtube-player';


@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './video-player.component.html'
})
export class VideoPlayerComponent {
  @Input() videoId;


}
