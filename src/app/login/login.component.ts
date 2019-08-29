import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { IUser } from '../modules/admin-panel/model/usermodel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formData: IUser;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

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
        this.router.navigate(['/dashboard'])
      },
      (error) =>{
        console.log(error)
      }
    );
  }

}
