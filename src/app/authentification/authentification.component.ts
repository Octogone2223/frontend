import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  register: FormGroup | any;
  login: FormGroup | any;
  username: string = '';
  password: string = '';
  isLoadingResults = false;
  registered = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
      'usernamelogin' : [null, Validators.required],
      'passwordlogin' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    let user = {"username" : form.value['username'], "password" : form.value['password'] };
    try{
      this.api.createAccount(user)
      .subscribe(res => {
        console.log(res);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    }catch{
      console.log('user déjà créé');
      this.isLoadingResults = false;
    }
  }

  onFormSubmitLogin(form:NgForm){
    this.isLoadingResults = true;
    let user = {"username" : form.value['usernamelogin'], "password" : form.value['passwordlogin'] };
    try{
      this.api.logAccount(user)
      .subscribe(res => {
        console.log(res)
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
      }catch{
        this.isLoadingResults = false;
      }
  }

}
