import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CustomResponse } from './models/custom-response';
import { Comic } from './models/comic';



@Injectable({
    providedIn: 'root'
})
export class ComicService {

    constructor(
        private http: HttpClient,
    ) { }

    private baseUrl: string = 'https://gateway.marvel.com';
    private comicRessource: string = '/v1/public/comics';
    private publicKey: string = 'a5a0013bca6f119629675f89e7518ecf';
    private privateKey: string = '55b06e4d4d03a3a8984f853abf90e18b967a8e03';
    private timeStamp: string = '';
    private hash: any;

    /**
     * Renvoie les comics 
     * @param parameters 
     * @returns 
     */
    getComics(parameters: object = {}): Observable<Comic[]> {
        return this.makeRequest(parameters);
    }

    /**
     * Renvoie les premiers comics de la liste
     * @param limit 
     * @returns 
     */
    getFirstsComics(limit: number = 10): Observable<Comic[]> {
        return this.getComics({
            limit: limit,
            format: 'comic',
        }
        );
    }

    /**
     * Construit la requête http
     * @param parameters 
     * @returns 
     */
    makeRequest(parameters: object = {}): Observable<any[]> {
        this.generateTimeStamp();
        this.generateHash(this.publicKey, this.privateKey);

        const baseParameters = {
            apikey: this.publicKey,
            ts: this.timeStamp,
            hash: this.hash
        }

        const url = this.baseUrl + this.comicRessource;

        return this.http.get<CustomResponse>(url, {
            params: {
                ...baseParameters, ...parameters
            }
        }).pipe(map(response => response.data.results));
    }

    /**
     * Génère le hash pour accéder à l'API
     * @param publicKey 
     * @param privateKey // TODO - ne doit pas être côté front
     */
    generateHash(publicKey: string, privateKey: string): void {
        const strToHash: string = this.timeStamp + privateKey + publicKey;
        this.hash = Md5.hashStr(strToHash);
    }

    /**
     * Génère un Timestamp
     */
    generateTimeStamp(): void {
        this.timeStamp = Date.now().toString();
    }

}
