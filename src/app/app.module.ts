import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { PopupComponent } from './components/popup/popup.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/character/character.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { ComicComponent } from './pages/comic/comic.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterCardComponent,
    PopupComponent,
    HeaderComponent,
    CharactersComponent,
    CharacterComponent,
    ComicsComponent,
    ComicComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
