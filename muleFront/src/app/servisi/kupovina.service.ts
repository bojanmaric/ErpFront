import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Kupovina } from '../models/kupovina';

@Injectable({
  providedIn: 'root'
})
export class KupovinaService {

  public ruta='http://localhost:8081/api/kupovina';
  constructor(private http:HttpClient) { }

  dataChange:BehaviorSubject<Kupovina[]>=new BehaviorSubject<Kupovina[]>([]);


  public getKupovine():Observable<Kupovina[]>{
    console.log('pozivanje')
    this.http.get<Kupovina[]>(this.ruta).subscribe(
      data=>{
        console.log(data)
        this.dataChange.next(data);
      }
    )
    return this.dataChange.asObservable();

  }

  public addKupovinu(kupovina){
    return this.http.post(this.ruta,kupovina);
  }
  public updateKupovinu(kupovina){
    return this.http.put(this.ruta,kupovina)
  }
  public deleteKupovinu(id){
    return this.http.delete(this.ruta+id)
  }


}
