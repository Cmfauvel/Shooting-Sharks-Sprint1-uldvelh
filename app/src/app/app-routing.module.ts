import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from './components/book-item/book-item.component';
import { LibraryOfOneCreatorComponent } from './components/library-of-one-creator/library-of-one-creator.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [{path: 'coin-lecture', component: LibraryComponent}, 
{path: 'biblio/nameCreator', component: LibraryOfOneCreatorComponent},
{path: 'biblio/nameCreator/nameBook', component: BookItemComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
