import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, Domaindata, Device, DeviceMonitor, DeviceAssignment, CustomerAssignment } from './model/customermodel';
import { Observable, from } from 'rxjs';
import { Vendor } from './model/vendormodel';
import { MatSnackBar } from '@angular/material';
import { ErrorSnackberComponent } from '../shared/components/error-snackber/error-snackber.component';
import { environment } from '../../../environments/environment';
import { sensor } from './model/gateway';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelMainService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  createCustomer(form: Customer){
    return this.http.post(environment.createCustomerUrl, form);
  }

  getAllCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(environment.getAllCustomerUrl)
  }

  updateCustomer(form : Customer){
    return this.http.put(environment.updateCustomerUrl, form)
  }

  getACustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(environment.getACustomerUrl+id+'?format=json');
  }

  getAddressType() : Observable<Domaindata[]> {
    return this.http.get<Domaindata[]>(environment.getdomainUrl+'Address');
  } 

  getCountryCode() : Observable<Domaindata[]> {
    return this.http.get<Domaindata[]>(environment.getdomainUrl+'country_code');
  }

  getLegalInfoType() : Observable<Domaindata[]> {
    return this.http.get<Domaindata[]>(environment.getdomainUrl+'Legal_info');
  }

  getCustomerType() : Observable<Domaindata[]> {
    return this.http.get<Domaindata[]>(environment.getdomainUrl+'Customer_type');
  }
  getAllDevice():Observable<Device[]>{
    return this.http.get<Device[]>(environment.getAllDeviceUrl)
  }

  createDevice(form: Device){
    return this.http.post(environment.createDeviceUrl, form)
  }

  updateDevice(form: Device){
    return this.http.put(environment.updateDeviceUrl, form);
  }

  getAllVendor() : Observable<Vendor[]> {
    return this.http.get<Vendor[]>(environment.getAllVendorUrl);
  } 

  createVendor(form : Vendor) {
    return this.http.post(environment.postVendorUrl, form);
  }

  updateVendor(form : Vendor) {
    return this.http.put(environment.vendorUpdateUrl, form);
  }

  getAVendorDetails(id : number) : Observable<Vendor> {
    return this.http.get<Vendor>(environment.getAvendorUrl+id+'?format=json');
  }

  getDeviceHealth() : Observable<DeviceMonitor[]>{
    return this.http.get<DeviceMonitor[]>(environment.getDeviceHealthUrl)
  }

  getCustomerBranch(id: number) : Observable<any[]>{
    return this.http.get<any[]>(environment.getCustomerBranchUrl+id+'?format=json');
  }

  getCustomerNameandId() : Observable<any[]>{
    return this.http.get<any[]>(environment.getCustomerandIdUrl+'?format=json');
  }

  updatedDeviceAssign(form: DeviceAssignment) {
    return this.http.put(environment.assignDevice, form)
  }

  getAssignInfo(id:number): Observable<DeviceAssignment[]>{
    return this.http.get<DeviceAssignment[]>(environment.getAssignInfoUrl+id+'?format=json');
  }
  getVendorNameId(): Observable<any[]>{
    return this.http.get<any[]>(environment.getVendorNameIdUrl);
  }

  postVendorManage(form: CustomerAssignment){
    return this.http.post(environment.createVendorManage, form)
  }

  getAssignmentHistory(id: number) : Observable<CustomerAssignment[]>{
    return this.http.get<CustomerAssignment[]>(environment.assignMentHistory+id+'?format=json')
  }

  updateFrequency(form: DeviceMonitor){
    return this.http.put(environment.updateFreqUrl, form)
  }

  getAdevice(id: number) : Observable<Device[]> {
    return this.http.get<Device[]>(environment.getADevice+id+'?format=json');
  }

  getSensorType() : Observable<any>{
    return this.http.get<any>(environment.getSensorTypeUrl);
  }

  createSensor(sensor: sensor) : Observable<any> {
    return this.http.post(environment.createSensorUrl,sensor);
  }
  // get error in snackbar
  getError(value : any) {
    switch (value) {
      case "301":
        this._snackBar.openFromComponent(ErrorSnackberComponent, 
          { data: "Getting Error From Database..", duration : 3000 });
      break;
      case "101":
        this._snackBar.openFromComponent(ErrorSnackberComponent,
          { data : "Duplicate Entry", duration : 3000 });
      break;
      case "501":
        this._snackBar.openFromComponent(ErrorSnackberComponent,
          { data:"Type Error", duration : 3000 });
      break;
      case "502":
        this._snackBar.openFromComponent(ErrorSnackberComponent, 
          { data:"Key Error", duration : 3000 });
      break;
      case "503":
        this._snackBar.openFromComponent(ErrorSnackberComponent, 
          { data:"Value Error", duration : 3000 });
      break;
      case "504":
        this._snackBar.openFromComponent(ErrorSnackberComponent, 
          { data : "Attribute Error", duration : 3000});
      break;
      case "505":
        this._snackBar.openFromComponent(ErrorSnackberComponent,
          { data : "Indentation Error", duration : 3000});
      break;
      case "404":
        this._snackBar.openFromComponent(ErrorSnackberComponent, 
          { data : "Not Fouund Error", duration : 3000 });
      break;
      case "405":
        this._snackBar.openFromComponent(ErrorSnackberComponent,
          { data : "File Not found Error", duration : 3000 });
      break;
      case "406":
        this._snackBar.openFromComponent(ErrorSnackberComponent,
          { data : "File Exist Error", duration : 3000 });
      break;
      case "601":
        this._snackBar.openFromComponent(ErrorSnackberComponent,
          { data : "Syntax Error", duration : 3000 });
      break;
      case "701":
        this._snackBar.openFromComponent(ErrorSnackberComponent,
          { data : "Broken Pipe Error", duration : 3000 });
      break;
      case "506":
        this._snackBar.openFromComponent(ErrorSnackberComponent,
          { data : "Invalid Data", duration : 3000 });
      break;
    }
  }
  // getGraphData() : Observable<any> {
  //   console.log("calling : " + environment.graphUrl+' sensor');
  //   return this.http.get<any>(environment.graphUrl+' sensor');
  // }
}
