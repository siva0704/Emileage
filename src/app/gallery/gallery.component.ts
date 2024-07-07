import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  cardview:boolean=true;
  photoview:boolean=false;

  onPhoto(){
    this.cardview=false;
    this.photoview=true;
  }

  onCard(){
    this.cardview = true ;  
    this.photoview= false;
  }
}
