import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'app-comic-create-form',
    templateUrl: './comic-create-form.component.html',
    styleUrls: ['./comic-create-form.component.scss']
})
export class ComicCreateFormComponent {
    comicForm = new FormGroup({
        title: new FormControl('', [
            Validators.required
        ]),
        description: new FormControl('', [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(400)
        ]),
        date: new FormControl('', [
            Validators.required,
            this.dateValidator()


        ]),
        character: new FormControl([])
    });

    dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const dateSelected = new Date(control.value);
            const diff = (Date.now() - dateSelected.getTime()) / (1000 * 3600 * 24);
            return diff > 1 ? null : { wrongDate: 'blabla' }
        }
    }
}
