import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic, ComicDto } from '../../models/comic';
import { ThumbnailFormats } from '../../models/thumbnail-formats.enum';

@Component({
    selector: 'app-comic',
    templateUrl: './comic.component.html',
    styleUrls: ['./comic.component.scss']
})
export class ComicComponent {
    @Input() comic: Comic;
    @Output() onSeeMore: EventEmitter<string> = new EventEmitter();

    thumbnailUrl: string;

    ngOnInit(): void {
        const format = ThumbnailFormats.landscape_xlarge;
        this.thumbnailUrl = `${this.comic.thumbnail.path}/${format}.${this.comic.thumbnail.extension}`;

        //let test = new ComicDto(this.comic)
    }

    seeMore(comicId) {
        this.onSeeMore.emit(comicId);
    }

}
