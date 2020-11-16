import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AggiungiCategoriaComponent } from './aggiungi-categoria/aggiungi-categoria.component';
import { ListaCategorieComponent } from './lista-categorie/lista-categorie.component';
import { ModificaCategoriaComponent } from './modifica-categoria/modifica-categoria.component';

const routes: Routes = [
  {
    path:'aggiungi_cat',
    component: AggiungiCategoriaComponent
  },
  {
    path:'lista_cat',
    component: ListaCategorieComponent
  },
  {
    path:'modifica_cat',
    component: ModificaCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
