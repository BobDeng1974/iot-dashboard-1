import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Vendor, Address, LegalInfo, AdditionalAttributes, Email, Phone, Domaindata } from '../../model/vendormodel';
import * as _ from "lodash";

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {

  // selected tab value
  private currentTab = 0;
  @Output() ButtonClicked = new EventEmitter<number>();

  // input for vendor data
  @Input() vendorData : Vendor;

  @Input() legalinfo_Type : Domaindata[];

  @Input() isd_code : Domaindata[];

  private addressData: Address[] = [];
  private legalData: LegalInfo[] =[];
  private additionalData: AdditionalAttributes[] = [];
  private emailData: Email[] = [];
  private phoneData: Phone[] = [];

  private addressColumnDefs;
  private legalColumnDefs;
  private additionalColumnDefs;
  private emailColumnDef;
  private phoneColumnDef;

  private addressGridApi;
  private addressGridColumnApi;
  private legalGridApi;
  private legalGridColumnApi;
  private phoneGridApi;
  private phoneGridColumnApi;
  private emailGridApi;
  private emailGridColumnApi;
  private additionalGridApi;
  private additionalGridColumnApi;
  private rowSelection : string;
  private selectedRow : Address;

  private addressDataCopy: Address[] = [];

  constructor() { }

  ngOnInit() {
    this.addressColumnDefs = [
      { headerName: 'Type', field: 'add_type', sortable: true, filter: true, width:100, editable: false, resizable:true },
      { headerName: 'Address', field: 'add_address_line1', editable: false, resizable: true, sortable: true, filter: true, cellStyle: {'white-space': 'normal', 'height': 'auto', 'overflow': 'visible', 'text-overflow': 'clip', 'overflow-wrap': 'break-word'} },
    ];

    this.legalColumnDefs = [
      { headerName: 'Type', field: 'legalinfo_type', sortable: true, filter: true, width:100,editable: true,resizable:true,
      cellEditor: 'agSelectCellEditor', 
      cellEditorParams: { values: [] }},
      { headerName: 'Value', field: 'legalinfo_value', width:200,editable: true,resizable:true},
    ];

    this.additionalColumnDefs = [
      { headerName: 'Attribute', field: 'addinfo_attr', sortable: true, filter: true, width:100,editable: true,resizable:true},
      { headerName: 'Value', field: 'addinfo_value', width:200,editable: true,resizable:true},
    ];

    this.emailColumnDef = [
      { headerName: 'Email Address', field: 'eml_address', editable: true, resizable:true },
    ];

    this.phoneColumnDef = [
      { headerName: 'ISD Code', field: 'ph_isd_code',width:100, editable: true,resizable:true,
      cellEditor: 'agSelectCellEditor', 
      cellEditorParams: { values: [] } },
      { headerName: 'Number', field: 'ph_no',width:200, editable: true, resizable:true },
    ];

    this.rowSelection = 'single';
  }

  resizeGrid(value : any) {
    this.currentTab = value.index;
    switch (value.index) {
      case 0:
        this.addressGridApi.sizeColumnsToFit();  
      break;

      case 1:
        this.legalGridApi.sizeColumnsToFit();  
      break;

      case 2:
        this.phoneGridApi.sizeColumnsToFit();  
      break;

      case 3:
        this.emailGridApi.sizeColumnsToFit();  
      break;

      case 4:
        this.additionalGridApi.sizeColumnsToFit();  
      break;
    }
  }

  InitializeClick() {
    this.ButtonClicked.emit(this.currentTab + 10);
  }

  ngOnChanges() {
    if(this.vendorData && this.vendorData.vendor_id != 0) {
      this.addressDataCopy = _.cloneDeep(this.vendorData.addresses);
      this.legalData = this.vendorData.legal_infos;
      this.additionalData = this.vendorData.additional_attributes;
      this.phoneData = this.vendorData.phones;
      this.emailData = this.vendorData.emails;
    }

    if(this.addressDataCopy) {
      this.addressDataCopy.map(m => m.add_address_line1 = m.add_address_line1 + ", " + m.add_address_line2 + ", " + m.add_city + ", " + m.add_state + ", " + m.add_country + ", " + m.add_pin);
    }

    if(this.legalinfo_Type && this.isd_code) {
      this.phoneColumnDef = [
        { headerName: 'ISD Code', field: 'ph_isd_code', editable: true,
          cellEditor: 'agSelectCellEditor', 
          cellEditorParams : { values : this.isd_code.map(m => m.domain_code + "-" + m.domain_value) } },
        { headerName: 'Number', field: 'ph_no', editable: true }
      ];
      this.legalColumnDefs = [
        { headerName: 'Type', field: 'legalinfo_type', sortable: true, filter: true, editable: true,
          cellEditor : 'agSelectCellEditor',
          cellEditorParams : { values : this.legalinfo_Type.map(m => m.domain_value)}},
        
        { headerName: 'Value', field: 'legalinfo_value',editable : true }
      ];
    }
  }

  onAddressGridReady(params) {
    this.addressGridApi = params.api;
    this.addressGridColumnApi = params.columnApi;
  }

  onLegalGridReady(params) {
    this.legalGridApi = params.api;
    this.legalGridColumnApi = params.columnApi;
  }

  onPhoneGridReady(params) {
    this.phoneGridApi = params.api;
    this.additionalGridColumnApi = params.columnApi;
  }

  onEmailGridReady(params) {
    this.emailGridApi = params.api;
    this.emailGridColumnApi = params.columnApi;
  }

  onAdditionalGridReady(params) {
    this.additionalGridApi = params.api;
    this.additionalGridColumnApi = params.columnApi;
  }

  onColumnResized() {
    this.addressGridApi.resetRowHeights();
  }

  onSelectionChanged(value) {
    this.selectedRow = this.addressGridApi.getSelectedRows()[0];
    //console.log(this.selectedRow);
    
  }
}
