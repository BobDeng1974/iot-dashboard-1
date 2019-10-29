import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile-contact',
  templateUrl: './mobile-contact.component.html',
  styleUrls: ['./mobile-contact.component.scss']
})
export class MobileContactComponent implements OnInit {
  contactForm:FormGroup;
  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.contactForm=this.fb.group({
      Name:[''],
      Email:[''],
      Message:['']
    })
  }

}
