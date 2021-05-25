import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-service';

@Injectable({
    providedIn: 'root'
})
export class CharacterService extends CrudService<Character> {

    constructor(
        public http: HttpClient
    ) {
        super(http, environment.apiRessources.characters)
    }

    /**
     * Renvoie les Characters 
     * @param parameters 
     * @returns 
     */
    getCharacters(parameters: object = {}): Observable<Character[]> {
        return this.findAll(parameters);
    }

    /**
     * Renvoie un comic en fonction de son id
     * @param id 
     * @returns 
     */
    getCharacter(id: number): Observable<Character> {
        return this.findOne(id);
    }

}
