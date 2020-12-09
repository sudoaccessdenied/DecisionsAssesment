import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  data:any;
  constructor(
          private _route:ActivatedRoute ,
          private _api:ApiService,
          private _router:Router
          ) { }

  ngOnInit(): void {
    this.data = this._route.snapshot.data['data'];
  }
  
  onButtonClick(value:any):void
  {
    localStorage.setItem("url",value);
    this._router.navigate(['/add']);
  }


}
