import { Component, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public service : ContactService,private toastr: ToastrService){}
  sideBarView: boolean = false;
  menuBtnView: boolean = true;
  productsView: boolean = false;

  public onClickMenu() {
    this.sideBarView = true;
    this.menuBtnView = false;
    this.productsView = false;
  }

  public onClickClose() {
    this.sideBarView = false;
    this.menuBtnView = true;
  }

  public onClickProducts() {
    this.productsView = !this.productsView;
  }

 public logout(){
    this.service.Logout()
    this.onClickClose()
    this.toastr.success("Logged out successfully")
  }
}
