import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(buscar: string): Observable<any> {
    const url = `${environment.apiUrl}everything?q=${buscar}&apiKey=${environment.apiKey}`;
    return this.http.get(url)
  }
}
