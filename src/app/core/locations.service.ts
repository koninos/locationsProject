import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  public getLocations():Observable<any> {//Location[]
    return this.http.get('./assets/mock-data/locations.json');
  }
}
