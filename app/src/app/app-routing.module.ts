import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-item/book-details/book-details.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { HomeComponent } from './components/home/home.component';
import { CreateChaptersComponent } from './components/add-book/create-chapters/create-chapters.component';
import { HeroMakerComponent } from './components/hero-maker/hero-maker.component';
import { LibraryOfOneCreatorComponent } from './components/library-of-one-creator/library-of-one-creator.component';
import { LibraryComponent } from './components/library/library.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ParamBookComponent } from './components/param-book/param-book.component';

const routes: Routes = [
  {path: 'se-connecter', component: LoginComponent},
  {path: 's-inscrire', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: 'create', component: AddBookComponent},
  {path: 'coin-lecture', component: LibraryComponent},
  {path: 'mybookscreated/:idBook', component: ParamBookComponent},
  {path: 'create/addchapters', component: CreateChaptersComponent},
  {path: 'hero', component: HeroMakerComponent},
  {path: ':idCreator', component: LibraryOfOneCreatorComponent},
  {path: ':idCreator/:idBook', component: BookItemComponent},
  {path: ':idCreator/:idBook/:idChapter', component: BookDetailsComponent},
  {path: 'biblio/nameCreator', component: LibraryOfOneCreatorComponent},
  {path: 'biblio/nameCreator/:idBook', component: BookItemComponent},
  {path: 'coin-lecture/:idBook', component: BookItemComponent},
  {path: 'coin-lecture/:idBook/:idChapter', component: BookDetailsComponent},
  {path: 'biblio/nameCreator/:idBook/:idChapter', component: BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
