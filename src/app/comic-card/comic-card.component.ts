import { Component, OnInit } from '@angular/core';
import { Comic } from './../models/comic';

@Component({
    selector: 'app-comic-card',
    templateUrl: './comic-card.component.html',
    styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent implements OnInit {

    comics: Comic[] = [];

    constructor() { }

    ngOnInit(): void {
        for (let i = 0; i < 5; i++) {
            const comic: Comic = {
                id: i,
                title: 'test',
                description: 'test 2'
            }
            this.comics.push(comic)
        }
    }

}
