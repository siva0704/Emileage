import { Component, Inject } from '@angular/core';
import { AosToken } from '../aos/aos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(@Inject(AosToken) aos: any) {
    aos.init({
      easing: 'ease-out-back',
      duration: 1200,
      delay: 300,
    }); //you can now use it, although you may want to do this onInit instead
  }
}
