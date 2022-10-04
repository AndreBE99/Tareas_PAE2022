import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.scss']
})
export class NoticiaListComponent implements OnInit {

  @Input('list') noticias: any = {};
  thisNew: any;
  @Output() currentNew: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectNews(noticia: any) {
    noticia.active = true;
    this.currentNew.emit(noticia);
    this.thisNew = noticia;
  }

}
