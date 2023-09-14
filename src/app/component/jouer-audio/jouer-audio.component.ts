import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jouer-audio',
  templateUrl: './jouer-audio.component.html',
  styleUrls: ['./jouer-audio.component.scss'],
})
export class JouerAudioComponent implements OnInit {
  audio!: HTMLAudioElement; // Define an audio element
  isPlaying = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const paramAudioUrl = params.get('audioUrl');
      if (paramAudioUrl !== null) {
        this.initializeAudio(paramAudioUrl); // Initialize the audio element
      }
    });
  }

  initializeAudio(audioUrl: string) {
    if (this.audio) {
      this.audio.pause(); // Pause the current audio if it exists
    }
    this.audio = new Audio(audioUrl); // Create a new audio element
    this.audio.play(); // Play the audio
    this.isPlaying = true;
  }

  playPause() {
    if (this.audio) {
      if (this.audio.paused) {
        this.audio.play(); // Play audio if paused
        this.isPlaying = true;
      } else {
        this.audio.pause(); // Pause audio if playing
        this.isPlaying = false;
      }
    }
  }

  avance() {
    if (this.audio) {
      this.audio.currentTime += 15; // Filer vers l'avant
    }
  }
  recule() {
    if (this.audio) {
      this.audio.currentTime -= 15; // Filer vers l'arriere
    }
  }
}
