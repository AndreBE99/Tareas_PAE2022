import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo: string = 'Hola mundo';

  constructor() {
    setTimeout(() => {
      this.titulo = 'Que tal?'
    }, 3000);
  }
}
