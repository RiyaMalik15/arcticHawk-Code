import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FCropServiceService {

  status:boolean = false;
  constructor(private http : Http) { }

  addCustomer(data):Promise<any>{
    return this.http.post('http://localhost:8765/FCrop_BackEnd/FCrop/addCustomer',data).
    toPromise().
    then(res=>res.json()).
    catch(this.errorHandler)
  }

  loginEmployee(data):Promise<any>{
    return this.http.post('http://localhost:8765/FCrop_BackEnd/FCrop/loginCustomer',data).
    toPromise().
    then(res=>res.json()).
    catch(this.errorHandler)
  }

  getCustomerById(cid):Promise<any>{
    return this.http.get('http://localhost:8765/FCrop_BackEnd/FCrop/getCustomerById/'+cid).
    toPromise().
    then(res => res.json()).
    catch(this.errorHandler)
  }


  addQuery(data):Promise<any>{
    return this.http.post('http://localhost:8765/FCrop_BackEnd/FCrop/addQuery',data)
    .toPromise()
    .then(res => res.json())
    .catch(this.errorHandler)
  }
  updateCustomer(data){
  
    return this.http.post('http://localhost:8765/FCrop_BackEnd/FCrop/updateCustomer',data).
    toPromise().
    then(res=>res.json()).
    catch(this.errorHandler)
  
  }

  errorHandler(error){
    return Promise.reject(error.json() || error)
  }
  getDistricts():Promise<string[]> {      
    return Promise.resolve(['BELGAUM','BAGALKOT','BIJAPUR','GULBARGA','BIDAR','RAICHUR','KOPPAL','GADAG',
    'DHARWAD','UTTARA_KANNADA','HAVERI','BELLARY','CHITRADURGA','DAVANGERE','SHIMOGA','UDUPI','CHIKMAGALUR',
    'TUMKUR','CHIKKABALLAPUR','KOLAR','BANGALORE','BANGALORE_RURAL','RAMANAGARAM','MANDYA','HASSAN',
    'DAKSHINA_KANNADA','KODAGU','MYSORE','CHAMARAJNAGAR','YADGIR']);      
}



}
