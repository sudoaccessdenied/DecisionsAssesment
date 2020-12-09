import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<any> {

  constructor(private _api:ApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     
    return this._api.getForm();
  }
}
