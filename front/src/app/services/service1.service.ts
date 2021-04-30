import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Service1Service {
 
  constructor(private http:HttpClient) { }
   
  getData():Observable<any>{

    return this.http.get('http://localhost:8001/users/getStudent');
  }
  submitData(obj:any):Observable<any>{
    
    return this.http.post('http://localhost:8001/users/register',obj);
  }
  deleteData(obj:any):Observable<any>{
    
    return this.http.delete('http://localhost:8001/users/register/' +obj.id,obj);
  }
  updateData(obj:any):Observable<any>{
    
    return this.http.put('http://localhost:8001/users/update/'+obj.id,obj);
  }
}
