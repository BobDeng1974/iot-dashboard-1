import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CustomerDashBoard, customerSupport } from './model/customerDashboard';
import { Customer } from '../admin-panel/model/customermodel';
@Injectable({
  providedIn: 'root'
})
export class DashbordMainService {
  constructor(private http: HttpClient) { }

  getGraphData(type):Observable<any>{
    console.log(environment.dataGraphUrl+type+"\"'")
    return this.http.get<any>(environment.dataGraphUrl+type+"\"'");
  }

  getCustomerAssignData(id : number) : Observable<CustomerDashBoard[]> {
    return this.http.get<CustomerDashBoard[]>(environment.customerdeviceAssignUrl+id+'?format=json');
  }

  getSensorData(id : number) : Observable<any[]> {
    return this.http.get<any[]>(environment.getADevice+id+'?format=json');
  }
  getCustomerNode(customer_id: number):Observable<any[]>{
    return this.http.post<any[]>(environment.getNodeUrl, { customer_id: customer_id });
  }
  postSupport(data: customerSupport):Observable<any>{
    return this.http.post<any>(environment.postSupportUrl,data);
  }
  getACustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(environment.getACustomerUrl+id+'?format=json');
  }
  getCustomerBranch(customer_id : number) : Observable<any> {
    return this.http.post<any>(environment.getCustomerBranchUrlforMobile, {customer_id : customer_id});
  }
  getAllNodesByBranch( data) : Observable<any>{
    return this.http.post(environment.getAllNodesByBranchUrl, data);
  }
  getAllNodeSensorGateway(id: number):Observable<any>{
    return this.http.post<any>(environment.GetAllGateWayNodeSensonUrl, { customer_id : id });
  }
}
