import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public user: any;
  public stats: any;
  public photos: any;
  public rphotos: any;
  public loading = true;

  constructor(
    private unsplashService: UnsplashService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.unsplashService.getUser().subscribe(
      user => {
        this.user = user;
        console.log(this.user);
      }
    );

    this.unsplashService.getStats().subscribe(
      stats => {
        this.stats = stats;
        console.log(this.stats);

      }
    );

    this.unsplashService.getPopularPhotos().subscribe(
      photos => {
        this.photos = photos;
        console.log(this.photos);

      }
    );

    this.unsplashService.getLatestPhotos().subscribe(
      rphotos => {
        this.rphotos = rphotos;
        console.log(this.rphotos);
        this.loading = false;
      }
    );
  }

}
