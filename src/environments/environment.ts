// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

   createCustomerUrl : "http://34.93.22.112:8000/api/qubematics/customer/create/",
   updateCustomerUrl : "http://34.93.22.112:8000/api/qubematics/customer/update/",
   getAllCustomerUrl : "http://34.93.22.112:8000/api/qubematics/customer/getall/?format=json",
   getACustomerUrl : "http://34.93.22.112:8000/api/qubematics/customer/getacustomer/",
   getdomainUrl : "http://35.200.162.115:8006/qiidomain/get/",
  //////////////////////////////////////////////////////////////////////////
   getCustomerBranchUrl : "http://34.93.22.112:8000/api/qubematics/customer/getbranch/",
   getCustomerandIdUrl : "http://34.93.22.112:8000/api/qubematics/customer/getcustomerandid/",
  //////////////////////////////////////////////////////////////////////////
  // private createDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/create/";
  // private updateDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/update/";
  // private getAllDeviceUrl = "http://192.168.0.103:8001/api/qubematics/device/getall/?format=json";
  // private deviceAliveUrl = "http://192.168.0.103:8001/api/qubematics/device/alive/";
  // private assignDevice = "http://192.168.0.103:8001/api/qubematics/device/assign/";
   createDeviceUrl : "http://34.93.22.112:8002/api/qubematics/device/create/",
   updateDeviceUrl : "http://34.93.22.112:8002/api/qubematics/device/update/",
   getAllDeviceUrl : "http://34.93.22.112:8002/api/qubematics/device/getall/?format=json",
   getAssignInfoUrl : "http://34.93.22.112:8002/api/qubematics/device/assignInfo/",
   deviceAliveUrl : "http://34.93.22.112:8002/api/qubematics/device/alive/",
   assignDevice : "http://34.93.22.112:8002/api/qubematics/device/assign/",
   getDeviceHealthUrl : "http://34.93.22.112:8002/api/qubematics/device/getdevicehealth/?format=json",
   updateFreqUrl : "http://34.93.22.112:8002/api/qubematics/device/updatefreq/",
   getADevice :  "http://34.93.22.112:8002/api/qubematics/device/get/",
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

   getAllVendorUrl : "http://34.93.22.112:8001/api/qubematics/vendor/getall/?format=json",
   postVendorUrl : "http://34.93.22.112:8001/api/qubematics/vendor/create/?format=json",
   vendorUpdateUrl : "http://34.93.22.112:8001/api/qubematics/vendor/update/",
   getAvendorUrl : "http://34.93.22.112:8001/api/qubematics/vendor/getavendor/",
   getVendorNameIdUrl : "http://34.93.22.112:8001/api/qubematics/vendor/vendornameid/?format=json",
   createVendorManage : "http://34.93.22.114:8001/api/qubematics/vendor/vendormanage/",
   assignMentHistory : "http://34.93.22.112:8001/api/qubematics/vendor/gethistory/",
   //graphUrl : "http://127.22.112:8086/query?db=sensor&q=select*from",
   dataGraphUrl : "http://34.93.150.203:8086/query?db=sensorReading&q=select * from DeviceSensorReading",
   //login url
   postLoginUrl : "http://192.168.0.14:8003/api/qubematics/authuser/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
