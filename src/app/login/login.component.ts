import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      user_name:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  onSubmit(form){
    console.log(form);
  }

}
