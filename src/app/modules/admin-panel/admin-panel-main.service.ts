import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, Domaindata } from './model/customermodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelMainService {

  private createCustomerUrl = "http://192.168.0.11:8000/api/qubematics/customer/create/";
  private updateCustomerUrl = "http://192.168.0.11:8000/api/qubematics/customer/update/";
  private getAllCustomerUrl = "http://192.168.0.11:8000/api/qubematics/customer/getall/?format=json";
  private getACustomerUrl = "http://192.168.0.11:8000/api/qubematics/customer/getacustomer/";
  private getdomainUrl = "http://35.200.162.115:8006/qiidomain/get/";
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

  getACustomer():Observable<Customer>{
    return this.http.get<Customer>(this.getACustomerUrl)
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
}
