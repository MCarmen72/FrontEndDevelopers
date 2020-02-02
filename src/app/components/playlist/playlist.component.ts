import { Component, OnInit, ViewChild } from '@angular/core';
import { Song } from '../../clases/song';
import { SONGS } from '../../mock/mock-songs';
import { ReproducerComponent } from '../reproducer/reproducer.component'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  @ViewChild(ReproducerComponent, {static: false}) player:ReproducerComponent ;
  songs = SONGS;
  selectedSong: Song;
  playedSong: Song;
  filterSongs:string;

  constructor() { }

  ngOnInit() {
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  onPlay(song: Song): void {
    this.playedSong = song;
    this.player.onStop();
  }

  filter(event){
    //console.log(`filter: ${event}`);
    this.filterSongs = event;
  }
}