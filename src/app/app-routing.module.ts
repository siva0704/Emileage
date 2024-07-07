import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
// import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MainteamComponent } from './components/mainteam/mainteam.component';
import { NewsroomComponent } from './components/newsroom/newsroom.component';
import { Testimonial2Component } from './components/testimonial2/testimonial2.component';
import { ProductsComponent } from './components/products/products.component';
import { AwardsComponent } from './components/awards/awards.component';
import { EelbikeComponent } from './components/eelbike/eelbike.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'newsroom', component: NewsroomComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'ecart', component: ProductsComponent },
  { path: 'team', component: TeamsComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'testimonial2', component: Testimonial2Component },
  { path: 'awards', component: AwardsComponent },
  { path: 'eelbike', component: EelbikeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'customer', component: CustomerListComponent,canActivate:[AuthGuard] },

  { path: '**', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
