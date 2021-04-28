import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicService } from '../comic.service';
import { Comic } from '../models/comic';
import { ThumbnailFormats } from '../models/thumbnail-formats.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    comics: Observable<Comic[]> = this.comicService.getFirstsComics(10);

    constructor(
        private comicService: ComicService
    ) { }

    ngOnInit(): void {
        this.comics.subscribe(
            comics => {
                comics.forEach(comic => {
                    comic.pathToThumbnail = this.getThumbnailPath(comic.thumbnail.path, comic.thumbnail.extension)
                });
            }
        )
    }

    getThumbnailPath(path: string, extension: string): string {
        const format = ThumbnailFormats.standard_fantastic
        console.log(`${path}/${format}.${extension}`)
        return `${path}/${format}.${extension}`;
    }


}
