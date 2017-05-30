import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../shared/blog.service';
import { Blog } from '../shared/blog.model';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {

  }

  save() {
    // this.blogService.update(id, blog)
    //   .then(updatedBlog => {
    //     console.log(updatedBlog);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  cancel() {

  }

  back() {
    this.router.navigate(['/blogs']);
  }

}
