import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'app-comic-create-form',
    templateUrl: './comic-create-form.component.html',
    styleUrls: ['./comic-create-form.component.scss']
})
export class ComicCreateFormComponent {

    comicForm = this.fb.group({
        title: ['', [
            Validators.required
        ]],
        description: ['', [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(400)
        ]],
        date: ['', [
            Validators.required,
            this.dateValidator()
        ]],
        character: ['']
    })

    constructor(private fb: FormBuilder) { }



    dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const dateSelected = new Date(control.value);
            const diff = (Date.now() - dateSelected.getTime()) / (1000 * 3600 * 24);
            return diff > 1 ? null : { wrongDate: 'blabla' }
        }
    }
}
