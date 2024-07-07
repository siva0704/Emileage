import { Component } from '@angular/core';

@Component({
  selector: 'app-newsroom',
  templateUrl: './newsroom.component.html',
  styleUrls: ['./newsroom.component.css'],
})
export class NewsroomComponent {
  //fullView : boolean = true;
  newsImage1: boolean = true;
  newsImage2: boolean = true;
  newsImage3: boolean = true;
  image1: boolean = false;
  image2: boolean = false;
  image3: boolean = false;

  public onClick1() {
    this.image1 = true;
    this.image2 = false;
    this.image3 = false;
    this.newsImage1 = false;
    this.newsImage2 = false;
    this.newsImage3 = false;
  }

  public onClick2() {
    this.image1 = false;
    this.image2 = true;
    this.image3 = false;
    this.newsImage1 = false;
    this.newsImage2 = false;
    this.newsImage3 = false;
  }

  public onClick3() {
    this.image1 = false;
    this.image2 = false;
    this.image3 = true;
    this.newsImage1 = false;
    this.newsImage2 = false;
    this.newsImage3 = false;
  }

  public onClickClose() {
    this.newsImage1 = true;
    this.newsImage2 = true;
    this.newsImage3 = true;
    this.image1 = false;
    this.image2 = false;
    this.image3 = false;
  }
}