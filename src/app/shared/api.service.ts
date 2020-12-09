import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap} from 'rxjs/operators';
import { AddProductForm } from '../products/add-product/add-product-form';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private _http:HttpClient) { }
  
  getProductList():Observable<any>
  {  
    const headers = {'Content-Type':'application/json; charset=utf-8','Accept':'application/json'};
    return this._http.get<any>(environment.productList ,{headers:headers});
  }
  
  getForm():Observable<AddProductForm<string>>
  { 
    let url = localStorage.getItem("url");  
    if(url===null) return undefined; 
    const headers = {'Content-Type':'application/json; charset=utf-8','Accept':'application/json'};
    return this._http.get<AddProductForm<string>>(url,{headers:headers});
  }
    
  createFormGroup(form: AddProductForm<string>[])
  {
      let group:any = {};    
      form.forEach(element=> {
        let value;
        if(element.type==="bool")
              value = (element.defaultValue ==="False")?false:true;
        else  
            value = element.defaultValue;

        if(element.mandatory)
          group[element.caption] = new FormControl(value,Validators.required);
        else
          group[element.caption] = new FormControl(value);
     });    

     return new FormGroup(group);
  }

}
