import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ComicService } from '../comic.service';
import { Comic } from '../models/comic';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    comics: Observable<Comic[]>;
    cards: any[] = [];

    constructor(
        private comicService: ComicService
    ) { }

    /** Based on the screen size, switch from standard to one column per row */




    ngOnInit(): void {
        //this.getFirstsComics()
        //this.comics.subscribe()

    }

    getFirstsComics(): void {
        this.comicService.getNFirstComics(10)
            .subscribe(comics => {
                this.comics = comics
            })
    }



}
