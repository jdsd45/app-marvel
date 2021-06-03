import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicService } from '@shared/services/comic.service';
import { Comic } from '@shared/models/comic';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    comics: Observable<Comic[]> = this.comicService.getFirstsComics(10);

    constructor(
        private comicService: ComicService,
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    seeMore(comicId) {
        this.router.navigateByUrl(`/comics/${comicId}`);
    }
}
