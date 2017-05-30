import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../shared/blog.service';
import { Blog } from '../shared/blog.model';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css'],
  providers: [BlogService]
})
export class BlogUpdateComponent implements OnInit {

  id: string = "592d75b35d35ce0fa8ef20a5"; // Extract id from url
  blog: Blog = new Blog(); // Variable hold update data

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {
    // Fill data update to controls
    this.blogService.getById(this.id)
      .then(blog => {
        this.blog.title = blog.title;
        this.blog.image = blog.image;
        this.blog.content = blog.content;
        this.blog.date = blog.date;
        this.blog.author = blog.author;
      })
      .catch(err => console.log(err))
  }

  // Save data
  onSubmit() {
    this.blogService.update(this.id, this.blog)
      .then(updatedBlog => {
        console.log(updatedBlog);
      })
      .catch(err => {
        console.log(err);
      })
  }

  onCancel() {

  }

  // Navigate to blogs list screen
  onBack() {
    this.router.navigate(['/blogs']);
  }

}
