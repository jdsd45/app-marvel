import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comic.service';

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
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.comicService.findOne(id)
            .subscribe(comic => this.comic = comic);

    }

}
