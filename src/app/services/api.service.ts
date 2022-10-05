import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Profesional } from '../models/profesional.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //apiUrl es la direccion donde consultamos los datos
  private apiUrl ='https://smartmesk.herokuapp.com/';
  constructor(private http: HttpClient) { }

  /**
   * Http conexion -> Get, Retorna todos los datos del tipo especificado
   * @param tipo define el dato que se va a enviar {profesional}
   * @returns una lista observable con todos los datos del tipo especificado.
   */
  getData(): Observable<any>{
    return this.http.get<Profesional[]>(this.apiUrl+'profesionalcarpeta');
  }

  /**
   * Http conexion->Post, Envia un dato al tipo especificado
   * @param item Dato a enviar
   * @param tipo especifica el tipo de dato a enviar {profesional}
   * @returns 
   */
  addData(item: any ,tipo: string): Observable<any>{
    return this.http.post<Profesional>(this.apiUrl + 'profesionalcarpeta', item);
  }

  /**
   * Http conexion->Post, Edita un dato al tipo especificado
   * @param item Dato a enviar
   * @param tipo especifica el tipo de dato a enviar {profesional}
   * @returns 
   */
  editData(item: any ): Observable<any>{
    console.log(item);
    return this.http.put<any>(this.apiUrl + 'profesionalcarpeta', item);
  }

  /**
   * http->delete elimina un profesional de un id especificado
   * @param id profesional a borrar
   * @returns void
   */
  deleteData(id:number){
    return this.http.delete<any>(this.apiUrl + "profesionalcarpeta/"+id)
    .subscribe();
  }
}
