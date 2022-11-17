import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Waste } from '../waste';

@Component({
  selector: 'app-waste-detail',
  templateUrl: './waste-detail.component.html',
  styleUrls: ['./waste-detail.component.scss']
})
export class WasteDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  waste: Waste = {
    _id: '', label: '', issuing_company: '', quantity: 0, expiration_date: '', is_collected: false
  };
  isLoadingResults = true;

  ngOnInit() {
    this.getWasteDetails(this.route.snapshot.params['id']);
  }

  getWasteDetails(id:any) {
    this.api.getWaste(id, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN…zcyfQ._u3DjsICv5h81A8BaNC1ivJPWjn9RNU0RrE4DoR7Fsw")
      .subscribe(data => {
        this.waste = data;
        console.log(this.waste);
        this.isLoadingResults = false;
      });
  }

  deleteWaste(id:string) {
    this.isLoadingResults = true;
    this.api.deleteWaste(id, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN…zcyfQ._u3DjsICv5h81A8BaNC1ivJPWjn9RNU0RrE4DoR7Fsw")
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/wastes']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
