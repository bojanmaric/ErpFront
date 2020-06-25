import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Automobil } from '../models/automobil';

@Injectable({
  providedIn: 'root'
})
export class AutomobilService {

  public ruta='http://localhost:8081/api/automobili';
  constructor(private http:HttpClient) { }
  dataChange:BehaviorSubject<Automobil[]>=new BehaviorSubject<Automobil[]>([]);


  public getAutomobile():Observable<Automobil[]>{

    this.http.get<Automobil[]>(this.ruta).subscribe(
      data=>{
        console.log(data)
        this.dataChange.next(data);
      }
    )
    return this.dataChange.asObservable();

  }

  public addAutomobil(automobil){
    return this.http.post(this.ruta,automobil);
  }
  public updateAutomobil(automobil){
    return this.http.put(this.ruta,automobil)
  }

  public deleteAutomobil(id){
    return this.http.delete(this.ruta+id)
  }

}
