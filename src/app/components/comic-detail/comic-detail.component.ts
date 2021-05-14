import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from '@shared/models/comic';
import { ComicService } from '@shared/services/comic.service';

@Component({
    selector: 'app-comic-detail',
    templateUrl: './comic-detail.component.html',
    styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

    comic: Comic

    constructor(
        private route: ActivatedRoute,
        private comicService: ComicService,
    ) { }

    ngOnInit(): void {
        this.getComic();
    }

    getComic(): void {
        this.route.paramMap.subscribe(mapParams => {
            this.comicService.findOne(Number(mapParams.get('id')))
                .subscribe(comic => this.comic = comic)
        })
    }

}
