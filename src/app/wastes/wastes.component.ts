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

  

  displayedColumns: string[] = ['libelle', 'issuing_company'];
  data: Waste[] = [];
  isLoadingResults = true;

  ngOnInit() {
    this.api.getWastes()
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
