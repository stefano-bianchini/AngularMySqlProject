import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-modifica-categoria',
  templateUrl: './modifica-categoria.component.html',
  styleUrls: ['./modifica-categoria.component.css']
})
export class ModificaCategoriaComponent implements OnInit {

  constructor(private service :ServerService) { }

  categorie = [];
  ngOnInit(): void {
    this.service.getCategoria().then((result: any)=>{
      this.categorie = result;
    });
  }

  selectedOption: string;
  printedOption: string;
  
  print() {
    this.printedOption = this.selectedOption;
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


  modificaCategoria()
  {
    this.recuperaInformazioni();
    const data = {
      descrizione: this.descrizione,
      prezzog: this.prezzog,
      prezzos: this.prezzos,
      prezzom: this.prezzom
    }

    this.service.updateCategoria(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}

