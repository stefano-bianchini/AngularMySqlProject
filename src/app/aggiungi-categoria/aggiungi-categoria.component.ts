import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-aggiungi-categoria',
  templateUrl: './aggiungi-categoria.component.html',
  styleUrls: ['./aggiungi-categoria.component.css']
})
export class AggiungiCategoriaComponent implements OnInit {

  constructor(private service :ServerService) { }

  ngOnInit(): void {
  }


  descrizione  = '';
  prezzog = '';
  prezzos = '';
  prezzom = '';

  recuperaInformazioni(){
    this.descrizione =(document.getElementById('descrizioneInput') as HTMLInputElement).value;
    this.prezzog=(document.getElementById('PrezzogInput') as HTMLInputElement).value;
    this.prezzos=(document.getElementById('PrezzosInput') as HTMLInputElement).value;
    this.prezzom=(document.getElementById('PrezzomInput') as HTMLInputElement).value;
  }

  addCategoria(): void {

    this.recuperaInformazioni();
    const data = {
      descrizione: this.descrizione,
      prezzog: this.prezzog,
      prezzos: this.prezzos,
      prezzom: this.prezzom
    }

    this.service.createCategoria(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
