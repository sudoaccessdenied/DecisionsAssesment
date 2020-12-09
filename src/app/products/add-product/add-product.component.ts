import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';
import { AddProductForm } from './add-product-form';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  data:AddProductForm<string>[] = [];
  sub:any = undefined;
  form:FormGroup;
  submittedData:string = undefined;
  //inject ApiService for FormGroup Creation
  //inject Router for navigation 
  //inject ActivatedRoute for getting data from resolve guard
  constructor(private _route:ActivatedRoute,private _router:Router,private _api:ApiService) { 

    // Getting data from resolve guard
    this.sub = this._route.data.subscribe(
      {
        next: resolve => {this.data = resolve.data;},
        error: err=>{
          console.error(err);
          this._router.navigate(['/home']);}
       }
      );
  }

  ngOnInit(): void {

    // if resolve does not return any data navigate to home route
    if(this.data.length<=0)
      this._router.navigate(['/home']);
    //else create FormGroup from the resolve data;
    this.form = this._api.createFormGroup(this.data);
    // console.log(this.data);
  }

  onSubmit():void{
    this.submittedData = JSON.stringify(this.form.getRawValue());
    // console.log(this.form.getRawValue());
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.sub!== undefined) this.sub.unsubscribe();
  }


  // dump data for select form
  getDummyData()
  {
    let data = [
      {
        caption:"Description",
        type:"text",
        defaultValue:"The quick brown fox jumps over the lazy dog.",
        mandatory:true,
        // options:[{key:"Nishant",value:"Nishant"},{key:"Prince",value:"Prince"}],
        validationMessage:"Item cannot be empty"
      },
      {
      caption:"Model",
      type:"select",
      defaultValue:"Nishant",
      mandatory:true,
      options:[{key:"Nishant",value:"Nishant"},{key:"Prince",value:"Prince"}],
      validationMessage:"Please select at least one item"
    },
    {
      caption:"isTouch",
      type:"bool",
      defaultValue:"True",
      mandatory:true,
      // options:[{key:"Nishant",value:"Nishant"},{key:"Prince",value:"Prince"}],
      validationMessage:"Item cannot be empty"
    }];
    return data;
  }


}
