import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders = environment.baseUrl+'providers';
 
  provider: any;
  constructor(private http: HttpClient) { } // injection de dépendence


  listProviders() {
    return this.http.get(this.urlProviders);
  }
  deleteProvider(myObj: any) {
    return this.http.delete(this.urlProviders + '/' + myObj['id'])
  }
  
  createProvider(myform: any) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.http.post(this.urlProviders, this.provider);
  }

  updateProvider(myObj: any) {
    return this.http.put(this.urlProviders + '/' + myObj['id'], myObj);
  }
  
  getProvider(id: any) {
    return this.http.get(this.urlProviders + '/' + id)
  }
}
