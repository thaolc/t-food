import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BlogService } from '../shared/blog.service';
import { Blog } from '../shared/blog.model';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css'],
  providers: [BlogService]
})
export class BlogUpdateComponent implements OnInit, OnDestroy {

  private sub: any;
  id: string; // Extract id from url
  blog: Blog = new Blog(); // Variable hold update data

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    // Extract id from url
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    // Fill data update to controls
    this.blogService.getById(this.id)
      .then(blog => {
        this.blog = blog;
      })
      .catch(err => console.log(err))
  }

  // Handle event save data
  onSubmit() {
    this.blogService.update(this.id, this.blog)
      .then(updated => {
        console.log(updated);
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Handle event cancel save data
  onCancel() {

  }

  // Navigate to list blogs screen
  onBack() {
    this.router.navigate(['/blogs']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
