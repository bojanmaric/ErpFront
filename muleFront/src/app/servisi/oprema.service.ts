import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Oprema } from '../models/oprema';

@Injectable({
  providedIn: 'root'
})
export class OpremaService {

  public ruta='http://localhost:8081/api/oprema';
  constructor(private http:HttpClient) { }
  dataChange:BehaviorSubject<Oprema[]>=new BehaviorSubject<Oprema[]>([]);


  public getOpreme():Observable<Oprema[]>{

    this.http.get<Oprema[]>(this.ruta).subscribe(
      data=>{
        this.dataChange.next(data);
      }
    )
    return this.dataChange.asObservable();

  }

  public addOpremu(oprema){
    return this.http.post(this.ruta,oprema);
  }
  public updateOpremu(oprema){
    return this.http.put(this.ruta,oprema)
  }

  public deleteOpremu(id){
    return this.http.delete(this.ruta+id)
  }

}
