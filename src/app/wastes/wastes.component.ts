import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Waste } from '../waste';

@Component({
  selector: 'app-wastes',
  templateUrl: './wastes.component.html',
  styleUrls: ['./wastes.component.scss']
})
export class WastesComponent implements OnInit {

  constructor(private api: ApiService) { }

  

  displayedColumns: string[] = ['label', 'expiration_date', 'quantity', 'issuing_company'];
  data: Waste[] = [];
  isLoadingResults = true;
  token:any = "";

  ngOnInit() {


    const user = {  "username" : "AZERT", "password": "setsetestsetsetset" };
  // try{
  //   this.api.createAccount(user)
  //   .subscribe(res => {
  //     this.data = res;
  //     console.log(this.data);
  //     this.isLoadingResults = false;
  //   }, err => {
  //     console.log(err);
  //     this.isLoadingResults = false;
  //   });
  // }catch{
  //   console.log('user deja cree');
  // }

  try{
    this.api.logAccount(user)
    .subscribe(res => {
      this.data = res;
      console.log(this.data)
      this.token = JSON.stringify(this.data)
      console.log(this.token);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
    }catch{
      console.log('user deja cree');
    }

    this.api.getWastes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN…zcyfQ._u3DjsICv5h81A8BaNC1ivJPWjn9RNU0RrE4DoR7Fsw")
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });



}
}
