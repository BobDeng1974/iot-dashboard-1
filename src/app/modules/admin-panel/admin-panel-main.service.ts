import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, Domaindata, Device } from './model/customermodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelMainService {

  private createCustomerUrl = "http://192.168.0.11:8000/api/qubematics/customer/create/";
  private updateCustomerUrl = "http://192.168.0.11:8000/api/qubematics/customer/update/";
  private getAllCustomerUrl = "http://192.168.0.11:8000/api/qubematics/customer/getall/?format=json";
  private getACustomerUrl = "http://192.168.0.11:8000/api/qubematics/customer/getacustomer/";
  private getdomainUrl = "http://35.200.162.115:8006/qiidomain/get/?format=json";
  private createDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/create/";
  private updateDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/update/";
  private getAllDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/getall/?format=json";
  private deviceAliveUrl = "http://192.168.0.103:8001/api/qubematics/device/alive/";
  private assignDevice = "http://192.168.0.103:8001/api/qubematics/device/assign/";
  constructor(private http: HttpClient) { }

  createCustomer(form: Customer){
    return this.http.post(this.createCustomerUrl, form);
  }

  getAllCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.getAllCustomerUrl)
  }

  updateCustomer(form : Customer){
    return this.http.put(this.updateCustomerUrl, form)
  }

  getACustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(this.getACustomerUrl+id+'?format=json')
  }

  getAddressType() : Observable<Domaindata[]> {
    return this.http.get<Domaindata[]>(this.getdomainUrl+'Address');
  } 

  getCountryCode() : Observable<Domaindata[]> {
    return this.http.get<Domaindata[]>(this.getdomainUrl+'country_code');
  }

  getLegalInfoType() : Observable<Domaindata[]> {
    return this.http.get<Domaindata[]>(this.getdomainUrl+'Legal_info');
  }

  getCustomerType() : Observable<Domaindata[]> {
    return this.http.get<Domaindata[]>(this.getdomainUrl+'Customer_type');
  }
  getAllDevice():Observable<Device[]>{
    return this.http.get<Device[]>(this.getAllDeviceUrl)
  }

  createDevice(form: Device){
    return this.http.post(this.createDeviceUrl, form)
  }

  updateDevice(form: Device){
    return this.http.put(this.updateDeviceUrl, form);
  }
}
