import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Character } from '@shared/models/character';
import { CharacterService } from '@shared/services/character.service';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';




@Component({
    selector: 'app-comic-create-form',
    templateUrl: './comic-create-form.component.html',
    styleUrls: ['./comic-create-form.component.scss']
})
export class ComicCreateFormComponent {

    separatorKeysCodes: number[] = [ENTER, COMMA];
    removable: boolean = true

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
        characters: [[]],
        characterActual: ['']

    })

    @ViewChild('characterInput') characterInput: ElementRef<HTMLInputElement>;

    filteredCharacters: Observable<Character[]>;

    constructor(
        private fb: FormBuilder,
        private characterService: CharacterService
    ) { }

    dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const dateSelected = new Date(control.value);
            const diff = (Date.now() - dateSelected.getTime()) / (1000 * 3600 * 24);
            return diff > 1 ? null : { wrongDate: 'blabla' };
        }
    }

    ngOnInit(): void {
        this.listenForCharacter();
    }



    removeCharacter(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        if (value) {
            let characters = this.comicForm.get('characters').value;
            const index = characters.indexOf(value)
            if (index) {
                characters.splice(index, 1)
                this.comicForm.get('characters').setValue(characters)
            }
        }
    }

    addCharacter(event: MatAutocompleteSelectedEvent): void {
        const value = event.option.viewValue;

        if (value) {
            let characters = this.comicForm.get('characters').value;
            characters.push(value);
            this.comicForm.get('characters').setValue(characters)
            this.characterInput.nativeElement.value = '';
            this.comicForm.get('characterActual').setValue('')
        }
    }



    listenForCharacter(): void {
        this.comicForm.get('characterActual').valueChanges.subscribe(value => {
            if (value.length >= 3) {
                this.filteredCharacters = this.characterService.getCharacters({ nameStartsWith: value });
            }
        })
    }
}
