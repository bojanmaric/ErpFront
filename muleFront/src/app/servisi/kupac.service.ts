import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Kupac } from '../models/kupac';

@Injectable({
  providedIn: 'root'
})
export class KupacService {

  public ruta='http://localhost:8081/api/kupac';
  constructor(private http:HttpClient) { }
  dataChange:BehaviorSubject<Kupac[]>=new BehaviorSubject<Kupac[]>([]);


  public getKupce():Observable<Kupac[]>{

    this.http.get<Kupac[]>(this.ruta).subscribe(
      data=>{
        
        this.dataChange.next(data);
      }
    )
    return this.dataChange.asObservable();

  }

  public addKupca(kupac){
    return this.http.post(this.ruta,kupac);
  }
  public updateKupca(kupac){
    return this.http.put(this.ruta,kupac)
  }

  public deleteKupca(id){
    return this.http.delete(this.ruta+id)
  }

}
