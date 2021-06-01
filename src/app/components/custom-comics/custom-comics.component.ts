import { Component, OnInit } from '@angular/core';
import { ComicService } from '@shared/services/comic.service';


@Component({
  selector: 'app-custom-comics',
  templateUrl: './custom-comics.component.html',
  styleUrls: ['./custom-comics.component.scss']
})
export class CustomComicsComponent implements OnInit {

  comics: any = this.comicService.getCustomComics();

  constructor(
    private comicService: ComicService
  ) { }

  ngOnInit(): void {
    console.log(this.comics)
  }

}
