import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-lista-categorie',
  templateUrl: './lista-categorie.component.html',
  styleUrls: ['./lista-categorie.component.css']
})
export class ListaCategorieComponent implements OnInit {

  constructor(private service :ServerService) { }

  categorie = [];
  descrizione = '';

  ngOnInit(): void {
    this.service.getCategoria().then((result: any)=>{
      this.categorie = result;
    });
  }
  rimuoviCategoria(categoria)
  {
    this.service.deleteCategoria(categoria);
  }

}
