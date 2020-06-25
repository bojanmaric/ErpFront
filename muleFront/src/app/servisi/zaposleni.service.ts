import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Zaposleni } from '../models/zaposleni';

@Injectable({
  providedIn: 'root'
})
export class ZaposleniService {

  public ruta='http://localhost:8081/api';
  constructor(private http:HttpClient) { }
  dataChange:BehaviorSubject<Zaposleni[]>=new BehaviorSubject<Zaposleni[]>([]);


  public getZaposlene():Observable<Zaposleni[]>{

    this.http.get<Zaposleni[]>(this.ruta+'/zaposleni?search=').subscribe(
      data=>{
        this.dataChange.next(data);
      }
    )
    return this.dataChange.asObservable();

  }

  public addZaposlenog(zaposleni){
    return this.http.post(this.ruta,zaposleni);
  }
  public updateZaposleni(zaposleni){
    return this.http.put(this.ruta,zaposleni)
  }

  public deleteZaposlenog(id){
    return this.http.delete(this.ruta+id)
  }

}
