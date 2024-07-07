import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public authflag : boolean = false;

  constructor(private http:HttpClient) { }
  baseUrl='http://13.235.238.14:8080/user/login'
  baseUrl2='http://13.235.238.14:8080'
  baseUrl3='http://13.235.238.14:8080/customer/ns/addcustomer'

  getList(status : string){
    return this.http.get(this.baseUrl2 + "/customer/findList/" + status);
  }
  customerAction(data :any) {
    return this.http.put(this.baseUrl2 + "/customer/update/customer", data);
  }

  getBackupfile(){
    return this.http.get(this.baseUrl2 + "/customer/get/backupFile");
  }
  getApprovedFile(){
    return this.http.get(this.baseUrl2 + "/customer/get/approvedFile");
  }
  Home(){
    // return this.http.get("https://renderdemo-4cny.onrender.com/home");
    return this.http.get("http://localhost:8080/home");
  }

  ContactUs(data:any)
  {
    return this.http.post(this.baseUrl3,data)
  }

  isLoggedin(){
    if(sessionStorage.getItem('token'))
    return true
  else
  return false;
  }

  Login(cred:any){
    return this.http.post(this.baseUrl,cred).pipe(
      catchError(this.handleError)
    );
  }

  Logout(){
    sessionStorage.removeItem("token")
  }

  public handleError(error: HttpErrorResponse):any {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
function throwError(arg0: () => Error) {
  throw new Error('Function not implemented.');
}

