import { Component, Input, OnInit, Output } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any = [];
  cargando: boolean = false;
  search: string = '';
  lastSearch: string = '';
  currentNew: any = {};

  constructor(private servicioDeNoticias: NoticiaService) { 
  }

  ngOnInit(): void {
  }

  buscar(e?: any): void {
    this.cargando = true;
    this.servicioDeNoticias.getNoticias(this.search).subscribe({
      next: (response) => {
        this.lastSearch = this.search;
        this.noticias = response.articles;
        this.cargando = false;
        this.search = "";
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    })
  }

  assignNews(noticia: any) {
    this.currentNew = noticia;
  }

  clearNews() {
    this.currentNew = {};
  }

}
