import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicService } from '@shared/services/comic.service';
import { Comic } from '@shared/models/comic';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    comics: Observable<Comic[]> = this.comicService.getFirstsComics(10);

    constructor(
        private comicService: ComicService
    ) { }

    ngOnInit(): void {

    }
}
