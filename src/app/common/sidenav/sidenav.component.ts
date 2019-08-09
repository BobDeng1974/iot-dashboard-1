import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Isidenav } from '../model/isidenav';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();
  sidenavOpen: boolean = true;
  selectedNavItem: string;

  sidenavData0: Isidenav[] = [
    {
      displayName: "Dashboard",
      iconClass: "view_quilt",
      redirectLink: "/dashboard"
    }
];

  sidenavData: Isidenav[] = [
    {
      displayName: "Organization",
      iconClass: "view_quilt",
      redirectLink: "/organization"
    }
];
  sidenavData1: Isidenav[]=[
    {
      displayName: "Project Office",
      iconClass:"view_quilt",
      redirectLink: "/project-office"
    }
  ];
  sidenavData2: Isidenav[]=[
    {
      displayName: "Sales",
      iconClass:"view_quilt",
      redirectLink: "/sales"
    }
  ];
  sidenavData3: Isidenav[]=[
    {
      displayName: "Budget",
      iconClass:"view_quilt",
      redirectLink: "/budget"
    }
  ];
  sidenavData4: Isidenav[]=[
    {
      displayName: "Specification",
      iconClass:"view_quilt",
      redirectLink: "/specification"
    }
  ];
  sidenavData5: Isidenav[]=[
    {
      displayName: "Inventory Management",
      iconClass:"view_quilt",
      redirectLink: "/inventory-management"
    }
  ];
  sidenavData6: Isidenav[]=[
    {
      displayName: "Purchase Ofiice",
      iconClass:"view_quilt",
      redirectLink: "/purchase-office"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.sidenavOpen = !this.sidenavOpen;
    this.sidenavToggle.emit();
  }

}
