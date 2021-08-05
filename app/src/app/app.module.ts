import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { LibraryOfOneCreatorComponent } from './components/library-of-one-creator/library-of-one-creator.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookDetailsComponent } from './components/book-item/book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateChaptersComponent } from './components/add-book/create-chapters/create-chapters.component';

import { ChapterService } from './services/chapter.service';
import { BookService } from './services/book.service';
import { CreatorService } from './services/creator.service';
import { HeroMakerComponent } from './components/hero-maker/hero-maker.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ParamBookComponent } from './components/param-book/param-book.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
=======
import { AuthInterceptor } from './auth.interceptor';
>>>>>>> 44a68a4ce45b9fbe71eeb2c5157483b7dea0ba8d

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
    BookDetailsComponent,
    CreateChaptersComponent,
    HeroMakerComponent,
    AddBookComponent,
    RegisterComponent,
    ParamBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ChapterService,
    BookService,
    CreatorService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
