import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashbordMainService {
  private dataGraphUrl = "http://192.168.0.14:8086/query?db=sensor&q=select * from DeviceSensorReading";
  constructor(private http: HttpClient) { }

  getGraphData():Observable<any>{
    return this.http.get<any>(this.dataGraphUrl);
  }
}
