import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-waste-edit',
  templateUrl: './waste-edit.component.html',
  styleUrls: ['./waste-edit.component.scss']
})
export class WasteEditComponent implements OnInit {

  wasteForm: FormGroup | any;
  _id: any = ''
  label: string = '';
  issuing_company: string = '';
  quantity: number = 0;
  expiration_date: string = '';
  is_collected: boolean = false;
  
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getWaste(this.route.snapshot.params['id']);
    this.wasteForm = this.formBuilder.group({
      'label' : [null, Validators.required],
      'issuing_company' : [null, Validators.required],
      'quantity' : [null, Validators.required],
      'expiration_date' : [null, Validators.required],
      'is_collected' : [null, Validators.required]
    });
  }

  getWaste(id:any) {
    this.api.getWaste(id, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN…zcyfQ._u3DjsICv5h81A8BaNC1ivJPWjn9RNU0RrE4DoR7Fsw").subscribe(data => {
      this._id = data._id;
      this.wasteForm.setValue({
        label: data.label,
        issuing_company: data.issuing_company,
        quantity: data.quantity,
        expiration_date: data.expiration_date,
        is_collected: data.is_collected
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateWaste(this._id, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN…zcyfQ._u3DjsICv5h81A8BaNC1ivJPWjn9RNU0RrE4DoR7Fsw" , form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/waste-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  wasteDetails() {
    this.router.navigate(['/waste-details', this._id]);
  }

}
