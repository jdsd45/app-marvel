import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { SharedModule } from '@shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ComicDetailComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        MatSidenavModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }