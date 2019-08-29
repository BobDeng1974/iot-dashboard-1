import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CustomerDashBoard } from './model/customerDashboard';
@Injectable({
  providedIn: 'root'
})
export class DashbordMainService {
  constructor(private http: HttpClient) { }

  getGraphData():Observable<any>{
    return this.http.get<any>(environment.dataGraphUrl);
  }

  getCustomerAssignData(id : number) : Observable<CustomerDashBoard[]> {
    return this.http.get<CustomerDashBoard[]>(environment.customerdeviceAssignUrl+id+'?format=json');
  }

  getSensorData(id : number) : Observable<any[]> {
    return this.http.get<any[]>(environment.getADevice+id+'?format=json');
  }
}
