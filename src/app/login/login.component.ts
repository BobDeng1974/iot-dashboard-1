import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { IUser } from '../modules/admin-panel/model/usermodel';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formData: IUser;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      user_name:['', [Validators.required]],
      user_password:['', [Validators.required]]
    })
  }

  onSubmit(form){
    this.formData = {
      user_name: form.controls.user_name.value,
      user_password: form.controls.user_password.value
    }
    this.loginService.postUserCredential(this.formData).subscribe(
      (data) => {
        console.log(data)
        this.spinner.show()
        if (data.user_type == 'customer') {
          this.router.navigate(['/dashboard']);
          this.spinner.hide()
        } else if (data.user_type == 'vendor'){
          this.router.navigate(['/vendor-panel']);
          this.spinner.hide()
        }else{
          this.router.navigate(['/admin-panel']);
          this.spinner.hide()
        }
      },
      (error) =>{
        console.log(error)
      }
    );
  }

}
