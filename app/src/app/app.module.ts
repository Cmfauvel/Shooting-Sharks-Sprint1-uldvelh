import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { LibraryOfOneCreatorComponent } from './components/library-of-one-creator/library-of-one-creator.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { FooterComponent } from './footer/footer.component';
import { BookDetailsComponent } from './components/book-item/book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    LibraryComponent,
    LibraryOfOneCreatorComponent,
    BookItemComponent,
    FooterComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
