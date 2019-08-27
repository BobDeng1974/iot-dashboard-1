import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashbordMainService {
  private dataGraphUrl = "http://34.93.150.203:8086/query?db=sensorReading&q=select * from DeviceSensorReading";
  constructor(private http: HttpClient) { }

  getGraphData():Observable<any>{
    return this.http.get<any>(this.dataGraphUrl);
  }
}
