import { Injectable } from '@angular/core';
import {GlobalConstants} from "./shared/constants/globals";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

export class DNA {
  constructor(public id: number,
              public sequence: string) { }
}
@Injectable()
export class AppService {

  private baseApiUrl = GlobalConstants.BASE_API_URL;
  constructor(private http: Http) {}

  public addDNA(dna: any) {
    var addDNAPath = this.baseApiUrl + 'dna/add';
    return this.http.post(addDNAPath, dna, {headers: this.getHeaders()})
      .map((res:Response) => res.json())
      .catch(this.handleError);
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  private handleError (error: any) {
    let errorMsg = error.message || ` Problem in retrieving`
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
