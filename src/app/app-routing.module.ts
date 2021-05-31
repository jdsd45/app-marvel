import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { CustomComicsComponent } from './components/custom-comics/custom-comics.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comics/:id', component: ComicDetailComponent },
  { path: 'back-office', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) },
  { path: 'custom-comics', component: CustomComicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }