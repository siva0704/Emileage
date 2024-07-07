import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  displayYellow: boolean = false;
  displayBlue: boolean = false;
  displayGreen: boolean = true;

  public onClickYellow() {
    this.displayYellow = true;
    this.displayBlue = false;
    this.displayGreen = false;
  }

  public onClickBlue() {
    this.displayYellow = false;
    this.displayBlue = true;
    this.displayGreen = false;
  }

  public onClickGreen() {
    this.displayYellow = false;
    this.displayBlue = false;
    this.displayGreen = true;
  }
}
