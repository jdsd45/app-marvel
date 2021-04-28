import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from '../models/comic';
import { ThumbnailFormats } from '../models/thumbnail-formats.enum';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent {
  @Input() comic: any;

  ngOnInit(): void {
    console.log(this.comic)
  }

  get getThumbnailPath(): string {
    const format = ThumbnailFormats.landscape_xlarge;
    return `${this.comic.thumbnail.path}/${format}.${this.comic.thumbnail.extension}`;
  }

}
