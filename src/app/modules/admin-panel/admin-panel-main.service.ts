import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, Domaindata, Device, DeviceMonitor, DeviceAssignment, CustomerAssignment } from './model/customermodel';
import { Observable } from 'rxjs';
import { Vendor } from './model/vendormodel';
import { MatSnackBar } from '@angular/material';
import { ErrorSnackberComponent } from '../shared/components/error-snackber/error-snackber.component';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelMainService {

  private createCustomerUrl = "http://34.93.221.249:8000/api/qubematics/customer/create/";
  private updateCustomerUrl = "http://34.93.221.249:8000/api/qubematics/customer/update/";
  private getAllCustomerUrl = "http://34.93.221.249:8000/api/qubematics/customer/getall/?format=json";
  private getACustomerUrl = "http://34.93.221.249:8000/api/qubematics/customer/getacustomer/";
  private getdomainUrl = "http://35.200.162.115:8006/qiidomain/get/";
  //////////////////////////////////////////////////////////////////////////
  private getCustomerBranchUrl = "http://34.93.221.249:8000/api/qubematics/customer/getbranch/";
  private getCustomerandIdUrl = "http://34.93.221.249:8000/api/qubematics/customer/getcustomerandid/";
  //////////////////////////////////////////////////////////////////////////
  // private createDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/create/";
  // private updateDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/update/";
  // private getAllDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/getall/?format=json";
  // private deviceAliveUrl = "http://192.168.0.103:8001/api/qubematics/device/alive/";
  // private assignDevice = "http://192.168.0.103:8001/api/qubematics/device/assign/";
  private createDeviceUrl = "http://192.168.0.11:8002/api/qubematics/device/create/";
  private updateDeviceUrl = "http://192.168.0.11:8002/api/qubematics/device/update/";
  private getAllDeviceUrl = "http://192.168.0.11:8002/api/qubematics/device/getall/?format=json";
  private getAssignInfoUrl = "http://192.168.0.11:8002/api/qubematics/device/assignInfo/";
  private deviceAliveUrl = "http://192.168.0.11:8002/api/qubematics/device/alive/";
  private assignDevice = "http://192.168.0.11:8002/api/qubematics/device/assign/";
  private getDeviceHealthUrl = "http://192.168.0.11:8002/api/qubematics/device/getdevicehealth/?format=json";
  private updateFreqUrl = "http://192.168.0.11:8002/api/qubematics/device/updatefreq/"
  // private createCustomerUrl = "http://34.93.221.249:8000/api/qubematics/customer/create/";
  // private updateCustomerUrl = "http://34.93.221.249:8000/api/qubematics/customer/update/";
  // private getAllCustomerUrl = "http://34.93.221.249:8000/api/qubematics/customer/getall/?format=json";
  // private getACustomerUrl = "http://34.93.221.249:8000/api/qubematics/customer/getacustomer/";
  // private getdomainUrl = "http://35.200.162.115:8006/qiidomain/get/";
  // private createDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/create/";
  // private updateDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/update/";
  // private getAllDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/getall/?format=json";
  // private deviceAliveUrl = "http://192.168.0.103:8001/api/qubematics/device/alive/";
  // private assignDevice = "http://192.168.0.103:8001/api/qubematics/device/assign/";
  // // private createDeviceUrl = "http://192.168.0.11:8001/api/qubematics/device/create/";
  // private updateDeviceUrl = "http://192.168.0.11:8001/api/qubematics/device/update/";
  // private getAllDeviceUrl = "http://192.168.0.11:8001/api/qubematics/device/getall/?format=json";
  // private deviceAliveUrl = "http://192.168.0.11:8001/api/qubematics/device/alive/";
  // private assignDevice = "http://192.168.0.11:8001/api/qubematics/device/assign/";

  private getAllVendorUrl = "http://34.93.221.249:8001/api/qubematics/vendor/getall/?format=json";
  private postVendorUrl = "http://34.93.221.249:8001/api/qubematics/vendor/create/?format=json";
  private vendorUpdateUrl = "http://34.93.221.249:8001/api/qubematics/vendor/update/";
  private getAvendorUrl = "http://34.93.221.249:8001/api/qubematics/vendor/getavendor/";
  private getVendorNameIdUrl = "http://34.93.221.249:8001/api/qubematics/vendor/vendornameid/?format=json"
  private createVendorManage = "http://34.93.221.249:8001/api/qubematics/vendor/vendormanage/"
  private assignMentHistory = "http://34.93.221.249:8001/api/qubematics/vendor/gethistory/"

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

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
    return this.http.get<Customer>(this.getACustomerUrl+id+'?format=json');
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

  getAllVendor() : Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.getAllVendorUrl);
  } 

  createVendor(form : Vendor) {
    return this.http.post(this.postVendorUrl, form);
  }

  updateVendor(form : Vendor) {
    return this.http.put(this.vendorUpdateUrl, form);
  }

  getAVendorDetails(id : number) : Observable<Vendor> {
    return this.http.get<Vendor>(this.getAvendorUrl+id+'?format=json');
  }

  getDeviceHealth() : Observable<DeviceMonitor[]>{
    return this.http.get<DeviceMonitor[]>(this.getDeviceHealthUrl)
  }

  getCustomerBranch(id: number) : Observable<any[]>{
    return this.http.get<any[]>(this.getCustomerBranchUrl+id+'?format=json');
  }

  getCustomerNameandId() : Observable<any[]>{
    return this.http.get<any[]>(this.getCustomerandIdUrl+'?format=json');
  }

  updatedDeviceAssign(form: DeviceAssignment) {
    return this.http.put(this.assignDevice, form)
  }

  getAssignInfo(id:number): Observable<DeviceAssignment[]>{
    return this.http.get<DeviceAssignment[]>(this.getAssignInfoUrl+id+'?format=json');
  }
  getVendorNameId(): Observable<any[]>{
    return this.http.get<any[]>(this.getVendorNameIdUrl);
  }

  postVendorManage(form: CustomerAssignment){
    return this.http.post(this.createVendorManage, form)
  }

  getAssignmentHistory(id: number) : Observable<CustomerAssignment[]>{
    return this.http.get<CustomerAssignment[]>(this.assignMentHistory+id+'?format=json')
  }

  updateFrequency(form: DeviceMonitor){
    return this.http.put(this.updateFreqUrl, form)
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
          { data:"Data Error", duration : 3000 });
      break;
      case "502":
        this._snackBar.openFromComponent(ErrorSnackberComponent, 
          { data:"Data Error", duration : 3000 });
      break;
      case "503":
        this._snackBar.openFromComponent(ErrorSnackberComponent, 
          { data:"Data Error", duration : 3000 });
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
}
