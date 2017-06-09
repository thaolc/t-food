/*
* @Author: th_le
* @Date:   2017-05-24 14:13:09
* @Last Modified by:   th_le
* @Last Modified time: 2017-06-09 15:48:50
*/

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppConfig } from '../../app.config';

@Injectable()

export class FoodService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private foodsUrl = 'foods';

  constructor(private http: Http, private config: AppConfig) {}

  list() {
    const url = this.config.apiUrl + this.foodsUrl;
    return this.http.get(url, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  getById(id) {
    const url = this.config.apiUrl + this.foodsUrl + "/" + id;
    return this.http.get(url, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  create(data) {
    const url = this.config.apiUrl + this.foodsUrl;
    return this.http.post(url, data, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  update(id, data) {
    const url = this.config.apiUrl + this.foodsUrl + "/" + id;
    return this.http.put(url, data, this.options)
      .map(() => data)
      .catch(err => Observable.throw(err));
  }

  delete(id) {
    const url = this.config.apiUrl + this.foodsUrl + "/" + id;
    return this.http.delete(url, this.options)
      .map(() => null)
      .catch(err => Observable.throw(err));
  }

  deleteMany(data) {
    const url = this.config.apiUrl + this.foodsUrl + "/delete-many";
    return this.http.post(url, data, this.options)
      .map(() => null)
      .catch(err => Observable.throw(err));
  }

}