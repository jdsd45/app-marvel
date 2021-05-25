import { Component, OnInit } from '@angular/core';
import { Character } from '@shared/models/character';
import { CharacterService } from '@shared/services/character.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-back-office',
    templateUrl: './back-office.component.html',
    styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {


    /*     characters: Observable<Character[]> = this.characterService.getCharacters({ nameStartsWith: chain });
     */
    constructor(
        private characterService: CharacterService
    ) { }

    ngOnInit(): void {
        /*         this.characters.subscribe(c => {
                    console.log(c)
                }) */
    }




}
