import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashbordMainService {
  constructor(private http: HttpClient) { }

  getGraphData():Observable<any>{
    return this.http.get<any>(environment.dataGraphUrl);
  }
}
