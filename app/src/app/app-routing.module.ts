import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-item/book-details/book-details.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { LibraryOfOneCreatorComponent } from './components/library-of-one-creator/library-of-one-creator.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [{path: 'coin-lecture', component: LibraryComponent},
{path: 'biblio/nameCreator', component: LibraryOfOneCreatorComponent},
{path: 'biblio/nameCreator/:id', component: BookItemComponent},
{path: 'coin-lecture/:id', component: BookItemComponent},
{path: 'biblio/nameCreator/:id/:id', component: BookDetailsComponent},
{path: 'biblio/nameCreator/:id/:id', component: BookDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
