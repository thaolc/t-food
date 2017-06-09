import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../shared/blog.service';
import { Blog } from '../shared/blog.model';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css'],
  providers: [BlogService]
})

export class BlogNewComponent implements OnInit {

  blog: Blog = new Blog();

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {
  }

  // Save data
  onSubmit(blogForm) {
    this.blogService.create(this.blog)
      .then(blog => {
        console.log(blog);
        this.blog = new Blog();
        blogForm.reset();
      })
      .catch(err => {
        console.log(err);
      })
  }

  onReset(blogForm) {
    this.blog = new Blog();
    blogForm.reset();
  }

  // Navigate to blogs list screen
  onBack() {
    this.router.navigate(['/blogs']);
  }

}
