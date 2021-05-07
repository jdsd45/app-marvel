import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export abstract class CrudService<T> {

    constructor(
        public http: HttpClient,
        public apiRessource: string
    ) { }

    findOne(id: number): Observable<T> {
        return this.http.get<T>(environment.apiUrl + this.apiRessource + '/' + id).pipe(map(n => n[0]));
    }

    findAll(parameters: {} = {}): Observable<T[]> {
        return this.http.get<T[]>(environment.apiUrl + this.apiRessource, {
            params: {
                ...parameters
            }
        });
    }

}