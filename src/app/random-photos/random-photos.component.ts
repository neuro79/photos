import { Component, OnInit, Input } from '@angular/core';
import { RandomPhotosService } from '../random-photos.service';

@Component({
  selector: 'app-random-photos',
  templateUrl: './random-photos.component.html',
  styleUrls: ['./random-photos.component.css']
})
export class RandomPhotosComponent implements OnInit {

  photoUrl: string = "";
  constructor(private randomPhotoService: RandomPhotosService) {
    this.refreshRandomPhoto();
  }

  ngOnInit(): void {
  }

  private refreshRandomPhoto() {
    this.randomPhotoService.getRandomPhoto().subscribe((url) => this.photoUrl = url);
  }

  onButtonClick() {
    this.refreshRandomPhoto();
  }
}
