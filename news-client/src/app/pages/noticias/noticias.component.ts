import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any = [];
  cargando: boolean = false;
  zelda: string = 'http://google.com';
  search: string = '';
  lastSearch: string = '';

  currentNews: any = {};

  constructor(private servicioDeNoticias: NoticiaService) { 
  }

  ngOnInit(): void {
    
  }

  buscar(e?: any): void {
    // console.log('Click event: ', e);
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

  selectNews(noticia: any) {
    this.currentNews = noticia;
  }

  clearNews() {
    this.currentNews = {};
  }

}
