import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Marka } from '../models/marka';

@Injectable({
  providedIn: 'root'
})
export class MarkaService {

  public ruta='http://localhost:8081/api/marka';
  constructor(private http:HttpClient) { }

  dataChange:BehaviorSubject<Marka[]>=new BehaviorSubject<Marka[]>([]);


  public getMarke():Observable<Marka[]>{

    this.http.get<Marka[]>(this.ruta).subscribe(
      data=>{
        console.log(data)
        this.dataChange.next(data);
      }
    )
    console.log(this.dataChange)
    return this.dataChange.asObservable();

  }

  public addMarku(marka){
    return this.http.post(this.ruta,marka);
  }
  public updateMarku(marka){
    return this.http.put(this.ruta,marka)
  }

  public deleteMarka(id){
    return this.http.delete(this.ruta+id)
  }

}
