import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComicCreateFormComponent } from './components/comic-create-form/comic-create-form.component';


@NgModule({
    declarations: [
        BackOfficeComponent,
        ComicCreateFormComponent
    ],
    imports: [
        CommonModule,
        BackOfficeRoutingModule,
        ReactiveFormsModule,
    ]
})
export class BackOfficeModule { }
