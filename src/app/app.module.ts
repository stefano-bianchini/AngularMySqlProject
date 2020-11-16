import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaCategorieComponent } from './lista-categorie/lista-categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { AggiungiCategoriaComponent } from './aggiungi-categoria/aggiungi-categoria.component';
import { FormsModule } from '@angular/forms';
import { ModificaCategoriaComponent } from './modifica-categoria/modifica-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaCategorieComponent,
    AggiungiCategoriaComponent,
    ModificaCategoriaComponent,
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
