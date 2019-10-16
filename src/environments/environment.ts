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
   createDeviceUrl : "http://34.93.22.112:8002/api/qubematics/gateway/create/",
   updateDeviceUrl : "http://34.93.22.112:8002/api/qubematics/gateway/update/",
   getAllDeviceUrl : "http://34.93.22.112:8002/api/qubematics/gateway/getall/?format=json",
   getAssignInfoUrl : "http://34.93.22.112:8002/api/qubematics/gateway/assignInfo/",
   deviceAliveUrl : "http://34.93.22.112:8002/api/qubematics/gateway/alive/",
   assignDevice : "http://34.93.22.112:8002/api/qubematics/gateway/assign/",
   getDeviceHealthUrl : "http://34.93.22.112:8002/api/qubematics/gateway/getdevicehealth/?format=json",
   updateFreqUrl : "http://34.93.22.112:8002/api/qubematics/gateway/updatefreq/",
   getADevice :  "http://34.93.22.112:8002/api/qubematics/gateway/get/",
   createNodeUrl:'http://34.93.22.112:8002/api/qubematics/gateway/createnode/',
   createSensorUrl:'http://34.93.22.112:8002/api/qubematics/gateway/createsensor/',
   getallSensorUrl : 'http://34.93.22.112:8002/api/qubematics/gateway/getallsensors/',
   getallGatewayUrl : 'http://34.93.22.112:8002/api/qubematics/gateway/getallgateway/',
   createGatewayUrl : 'http://34.93.22.112:8002/api/qubematics/gateway/creategateway/',

   getallNodesUrl : 'http://34.93.22.112:8002/api/qubematics/gateway/getallnodes/',
   getAllVendorUrl : "http://34.93.22.112:8001/api/qubematics/vendor/getall/?format=json",
   postVendorUrl : "http://34.93.22.112:8001/api/qubematics/vendor/create/?format=json",
   vendorUpdateUrl : "http://34.93.22.112:8001/api/qubematics/vendor/update/",
   getAvendorUrl : "http://34.93.22.112:8001/api/qubematics/vendor/getavendor/",
   getVendorNameIdUrl : "http://34.93.22.112:8001/api/qubematics/vendor/vendornameid/?format=json",
   createVendorManage : "http://34.93.22.112:8001/api/qubematics/vendor/vendormanage/",
   assignMentHistory : "http://34.93.22.112:8001/api/qubematics/vendor/gethistory/",
   customerManageUrl : "http://34.93.22.112:8001/api/qubematics/vendor/customerassign/",
   //graphUrl : "http://127.22.112:8086/query?db=sensor&q=select*from",
   dataGraphUrl : "http://34.93.221.249:8086/query?db=sensorReading&q=select * from DeviceSensorReading where sensor_type='\"",
   //login url
   postLoginUrl : "http://34.93.22.112:8003/api/qubematics/authuser/",

   customerdeviceAssignUrl : "http://34.93.22.112:8002/api/qubematics/gateway/deviceassign/",

   //qm domian sensor type
   getSensorTypeUrl : "http://34.93.22.112:8004/qmdomain/get/sensor",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
