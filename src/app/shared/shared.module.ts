import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { httpInterceptorProviders } from './interceptors';
import { ComicComponent } from './components/comic/comic.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    ComicComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
  ],
  exports: [
    ComicComponent,
  ],
  providers: [httpInterceptorProviders],

})
export class SharedModule { }
