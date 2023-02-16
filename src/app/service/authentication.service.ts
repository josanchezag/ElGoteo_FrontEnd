import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private params:HttpParams=new HttpParams();

  constructor(private http: HttpClient) { }

  public auth (url:string,body:any){
    console.log('Parametros enviados....'+body.toString());
    return this.http.post<any>(url,body);
  }

  public setParams(key:string,value:string){ this.params.append(key,value)}
  public reiniciarParams(){this.params=new HttpParams();}
}
