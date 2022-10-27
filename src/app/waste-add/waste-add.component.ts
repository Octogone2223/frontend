import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-waste-add',
  templateUrl: './waste-add.component.html',
  styleUrls: ['./waste-add.component.scss']
})
export class WasteAddComponent implements OnInit {

  wasteForm: FormGroup | any;
  label: string = '';
  issuing_company: string = '';
  quantity: number = 0;
  expiration_date: string = '';
  is_collected: boolean = false;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.wasteForm = this.formBuilder.group({
      'label' : [null, Validators.required],
      'issuing_company' : [null, Validators.required],
      'quantity' : [null, Validators.required],
      'expiration_date' : [null, Validators.required],
      'is_collected' : [null, Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addWaste(form)
      .subscribe(res => {
          //let id = res['_id'];
          this.isLoadingResults = false;
         // this.router.navigate(['/waste-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
