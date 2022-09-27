import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoviService {

  private readonly url = "https://180930b.novitesting.com"
  private readonly apiKey = "oNiPIWDjyGSkvLuxwHTzbXgBg2woNoW2TjU/tJs0E7U=";

  constructor(private http: HttpClient) { }

  public requestMemberList(): Observable<any> {
    let apiUrl = this.url + '/api/members';
    let headers = { headers: { Authorization: 'Basic ' + this.apiKey }};
    return this.http.get(apiUrl, headers);
}

  public requestMembersSimpleList(): Observable<any> {
      let apiUrl = this.url + '/api/members/simple-list';
      let headers = { headers: { Authorization: 'Basic ' + this.apiKey }};
      return this.http.get(apiUrl, headers);
  }
}
