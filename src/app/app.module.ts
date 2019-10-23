import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {MatBadgeModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { AuthorComponent } from './components/author/author.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogCardComponent,
    AuthorComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatBadgeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
