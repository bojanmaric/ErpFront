import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TipAutomobila } from '../models/tipAutomobila';

@Injectable({
  providedIn: 'root'
})
export class TipAutomobilaService {

  public ruta='http://localhost:8081/api/tipAutomobila';
  constructor(private http:HttpClient) { }

  dataChange:BehaviorSubject<TipAutomobila[]>=new BehaviorSubject<TipAutomobila[]>([]);


  public getTipoviAutomobila():Observable<TipAutomobila[]>{

    this.http.get<TipAutomobila[]>(this.ruta).subscribe(
      data=>{
        this.dataChange.next(data);
      }
    )
    return this.dataChange.asObservable();

  }

  public addTipAutomobila(tipAutomobila){
    return this.http.post(this.ruta,tipAutomobila);
  }
  public updateTipAutomobila(tipAutomobila){
    return this.http.put(this.ruta,tipAutomobila)
  }

  public deleteKupovinu(id){
    return this.http.delete(this.ruta+id)
  }

}
