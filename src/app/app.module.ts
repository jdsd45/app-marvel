import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { SharedModule } from '@shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { CustomComicsComponent } from './components/custom-comics/custom-comics.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ComicDetailComponent,
        CustomComicsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }