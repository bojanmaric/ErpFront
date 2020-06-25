import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Osiguranje } from '../models/osiguranje';
import { Zaposleni } from '../models/zaposleni';

@Injectable({
  providedIn: 'root'
})
export class OsiguranjeService {

  public ruta='http://localhost:8081/api/osiguranje';
  constructor(private http:HttpClient) { }
  dataChange:BehaviorSubject<Osiguranje[]>=new BehaviorSubject<Osiguranje[]>([]);


  public getOsiguranja():Observable<Osiguranje[]>{

    this.http.get<Osiguranje[]>(this.ruta).subscribe(
      data=>{
        this.dataChange.next(data);
      }
    )
    return this.dataChange.asObservable();

  }

  public addOsiguranje(osiguranje){
    return this.http.post(this.ruta,osiguranje);
  }
  public updateOsiguranje(osiguranje){
    return this.http.put(this.ruta,osiguranje)
  }

  public deleteOsiguranje(id){
    return this.http.delete(this.ruta+id)
  }

}
