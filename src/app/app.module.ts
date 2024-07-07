import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AosToken, aos } from './components/aos/aos.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MainteamComponent } from './components/mainteam/mainteam.component';
import { NewsroomComponent } from './components/newsroom/newsroom.component';
import { Testimonial2Component } from './components/testimonial2/testimonial2.component';
import { ProductsComponent } from './components/products/products.component';
import { AwardsComponent } from './components/awards/awards.component';
import { EelbikeComponent } from './components/eelbike/eelbike.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { SecurityInterceptor } from './interceptor/security.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    NavbarComponent,
    TestimonialComponent,
    FooterComponent,
    ContactusComponent,
    TeamsComponent,
    MainteamComponent,
    NewsroomComponent,
    Testimonial2Component,
    ProductsComponent,
    AwardsComponent,
    EelbikeComponent,
    PrivacypolicyComponent,
    GalleryComponent,
    LoginComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates:true,
      timeOut:3000,
      easing:'ease-out',
      easeTime:300
    }),
  ],
  providers: [{ provide: AosToken, useValue: aos} ,{provide:HTTP_INTERCEPTORS,useClass:SecurityInterceptor,multi:true},],
  bootstrap: [AppComponent],
})
export class AppModule {}
