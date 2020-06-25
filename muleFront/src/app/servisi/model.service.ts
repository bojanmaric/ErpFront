import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  public ruta='http://localhost:8081/api/model';
  constructor(private http:HttpClient) { }
  dataChange:BehaviorSubject<Model[]>=new BehaviorSubject<Model[]>([]);


  public getModel():Observable<Model[]>{

    this.http.get<Model[]>(this.ruta).subscribe(
      data=>{
        this.dataChange.next(data);
      }
    )
    return this.dataChange.asObservable();

  }

  public addModel(model){
    return this.http.post(this.ruta,model);
  }
  public updateModel(model){
    return this.http.put(this.ruta,model)
  }

  public deleteModel(id){
    return this.http.delete(this.ruta+id)
  }

}
