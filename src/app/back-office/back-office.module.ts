import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComicCreateFormComponent } from './components/comic-create-form/comic-create-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
    declarations: [
        BackOfficeComponent,
        ComicCreateFormComponent,
    ],
    imports: [
        CommonModule,
        BackOfficeRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatChipsModule,

    ],
    providers: [
        MatDatepickerModule,
    ],
})
export class BackOfficeModule { }
