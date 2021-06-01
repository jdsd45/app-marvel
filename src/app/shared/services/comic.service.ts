import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comic } from '../models/comic';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-service';

@Injectable({
    providedIn: 'root'
})
export class ComicService extends CrudService<Comic> {

    constructor(
        public http: HttpClient
    ) {
        super(http, environment.apiRessources.comics)
    }

    /**
     * Renvoie les comics 
     * @param parameters 
     * @returns 
     */
    getComics(parameters: object = {}): Observable<Comic[]> {
        return this.findAll(parameters);
    }

    /**
     * Renvoie un comic en fonction de son id
     * @param id 
     * @returns 
     */
    getComic(id: number): Observable<Comic> {
        return this.findOne(id);
    }

    /**
     * Renvoie les premiers comics de la liste
     * @param limit 
     * @returns 
     */
    getFirstsComics(limit: number = 10): Observable<Comic[]> {
        return this.findAll({
            limit: limit,
            format: 'comic',
        });
    }

    addCustomComic(customComic) {
        const KEY = 'customComicsList';

        const parseCustomComic = JSON.stringify(customComic);

        let customComicsList;

        if (localStorage.getItem(KEY) === null) {
            customComicsList = [];
        } else {
            customComicsList = JSON.parse(localStorage.getItem(KEY));
        }

        customComicsList.push(parseCustomComic);
        localStorage.setItem(KEY, JSON.stringify(customComicsList));

    }

    getCustomComics() {
        const KEY = 'customComicsList';

        if (localStorage.getItem(KEY)) {
            let customComicsList = JSON.parse(localStorage.getItem(KEY));
            return customComicsList.map(c => JSON.parse(c))
            //return JSON.parse(localStorage.getItem(KEY));
        }

        return [];
    }

}
