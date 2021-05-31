import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Character } from '@shared/models/character';
import { CharacterService } from '@shared/services/character.service';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map } from 'rxjs/operators';
import { ComicService } from '@shared/services/comic.service';

@Component({
    selector: 'app-comic-create-form',
    templateUrl: './comic-create-form.component.html',
    styleUrls: ['./comic-create-form.component.scss']
})
export class ComicCreateFormComponent {

    separatorKeysCodes: number[] = [ENTER, COMMA];
    removable: boolean = true
    filteredCharactersList: Observable<Character[]>;
    @ViewChild('characterInput') characterInput: ElementRef<HTMLInputElement>;

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
        charactersList: [[], [
            Validators.required,
            Validators.minLength(1)
        ]],
        characterActual: ['']
    })

    comicFormInitialValue: any;

    get charactersList() {
        return this.comicForm.get('charactersList');
    }

    constructor(
        private fb: FormBuilder,
        private characterService: CharacterService,
        private comicService: ComicService
    ) { }

    ngOnInit(): void {
        this.comicFormInitialValue = this.comicForm.value
        this.filterCharactersListWithUserInput();
    }

    dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const dateSelected = new Date(control.value);
            const diff = (Date.now() - dateSelected.getTime()) / (1000 * 3600 * 24);
            return diff > 1 ? null : { wrongDate: 'blabla' };
        }
    }

    removeCharacter(event: MatChipInputEvent): void {
        const value = event;
        const charactersList = this.charactersList.value.filter(c => c !== value);
        this.charactersList.setValue(charactersList)
    }

    addCharacter(event: MatAutocompleteSelectedEvent): void {
        const value = event.option.viewValue;

        if (value) {
            let charactersList = this.charactersList.value;
            charactersList.push(value);
            this.charactersList.setValue(charactersList)
            this.characterInput.nativeElement.value = '';
            this.comicForm.get('characterActual').setValue('')
        }
    }

    filterCharactersListWithUserInput(): void {
        this.comicForm.get('characterActual').valueChanges.subscribe(inputValue => {
            console.log('inputValue', inputValue)
            if (inputValue && inputValue.length >= 3) {
                this.filteredCharactersList = this.characterService.getCharacters({ nameStartsWith: inputValue })
                    .pipe(
                        map(characters => {
                            return characters.filter(c => !this.charactersList.value.includes(c.name))
                        })
                    );
            }
        })
    }

    onSubmit() {
        console.log(this.comicFormInitialValue)
        this.comicService.addCustomComic(this.comicForm.value)
        this.comicForm.reset(this.comicFormInitialValue)
    }


}
