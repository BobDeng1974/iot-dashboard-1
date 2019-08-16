import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './model/customermodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelMainService {

  private createCustomerUrl = "http://192.168.0.11/api/qubematics/customer/create/";
  private updateCustomerUrl = "http://192.168.0.11/api/qubematics/customer/update/";
  private getAllCustomerUrl = "http://192.168.0.11/api/qubematics/customer/getall/";
  private getACustomerUrl = "http://192.168.0.11/api/qubematics/customer/getacustomer/";
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
}
