import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbRatingModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartPageComponent,
    SignUpComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    NgbRatingModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
