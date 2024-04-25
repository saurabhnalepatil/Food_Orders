import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbRatingConfig, NgbRatingModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; 
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './components/tags/tags.component'; 
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    NgbRatingModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
