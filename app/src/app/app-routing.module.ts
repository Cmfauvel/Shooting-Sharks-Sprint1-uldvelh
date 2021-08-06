import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-item/book-details/book-details.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { HomeComponent } from './components/home/home.component';
import { CreateChaptersComponent } from './components/add-book/create-chapters/create-chapters.component';
import { HeroMakerComponent } from './components/hero-maker/hero-maker.component';
import { LibraryOfOneCreatorComponent } from './components/library-of-one-creator/library-of-one-creator.component';
import { LibraryComponent } from './components/library/library.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ParamBookComponent } from './components/param-book/param-book.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BooksComponent } from './components/books/books.component';
import { ModifyBookComponent } from './components/book-item/book-details/modify-book/modify-book.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: 'create', component: AddBookComponent},
  {path: 'book', component: BooksComponent,
  children:[
    {path: ':id', component: BookDetailsComponent}, 
    {path: ':id/update', component: ModifyBookComponent},
    {path: ':id/chapter', component: CreateChaptersComponent},
  ]},
  {path: 'coin-lecture', component: LibraryComponent},
  {path: 'mybookscreated/:idBook', component: ParamBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
