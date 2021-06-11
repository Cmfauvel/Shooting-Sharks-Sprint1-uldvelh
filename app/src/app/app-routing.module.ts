import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-item/book-details/book-details.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { CreateChaptersComponent } from './components/create-chapters/create-chapters.component';
import { HeroMakerComponent } from './components/hero-maker/hero-maker.component';
import { LibraryOfOneCreatorComponent } from './components/library-of-one-creator/library-of-one-creator.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  {path: 'coin-lecture', component: LibraryComponent},
  {path: 'biblio/nameCreator', component: LibraryOfOneCreatorComponent},
  {path: 'biblio/nameCreator/:idBook', component: BookItemComponent},
  {path: 'hero', component: HeroMakerComponent},
  {path: 'coin-lecture/:idBook', component: BookItemComponent},
  {path: 'coin-lecture/:idBook/:idChapter', component: BookDetailsComponent},
  {path: 'biblio/nameCreator/:idBook/:idChapter', component: BookDetailsComponent},
  {path: 'create', component: CreateChaptersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
