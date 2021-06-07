import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-item/book-details/book-details.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryOfOneCreatorComponent } from './components/library-of-one-creator/library-of-one-creator.component';
import { LibraryComponent } from './components/library/library.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{ path: '', component: HomeComponent},
{path: 'coin-lecture', component: LibraryComponent},
{path: ':idCreator', component: LibraryOfOneCreatorComponent},
{path: ':idCreator/:idBook', component: BookItemComponent},
{path: 'coin-lecture/:idBook', component: BookItemComponent},
{path: 'coin-lecture/:idBook/:idChapter', component: BookDetailsComponent},
{path: ':idCreator/:idBook/:idChapter', component: BookDetailsComponent},
{path: 'se-connecter', component: LoginComponent},
{path: 's-inscrire', component: RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
