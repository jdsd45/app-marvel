import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { ComicCreateFormComponent } from './components/comic-create-form/comic-create-form.component';


const routes: Routes = [
  { path: '', component: BackOfficeComponent },
  { path: 'comic/create', component: ComicCreateFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
