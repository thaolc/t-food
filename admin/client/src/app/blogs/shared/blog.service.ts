/*
* @Author: th_le
* @Date:   2017-05-23 17:26:05
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-26 11:52:13
*/

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppConfig } from '../../app.config';
import { Blog } from './blog.model';

@Injectable()
export class BlogService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private blogsUrl = 'blogs';

  constructor(private http: Http, private config: AppConfig) {}

  list() {
    const url = this.config.apiUrl + this.blogsUrl;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  getById(id): Promise<Blog> {
    const url = this.config.apiUrl + this.blogsUrl + '/' + id;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  create(data): Promise<Blog> {
    const url = this.config.apiUrl + this.blogsUrl;
    return this.http.post(url, data)
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  update(id, data): Promise<Blog> {
    const url = this.config.apiUrl + this.blogsUrl + '/' + id;
    return this.http.put(url, data)
      .toPromise()
      .then(() => data)
      .catch(err => console.log(err));
  }

  delete(id): Promise<Blog> {
    const url = this.config.apiUrl + this.blogsUrl + '/' + id;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(err => console.log(err));
  }
}