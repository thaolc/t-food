import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoBlogs() {
    this.router.navigate(['/blogs']);
  }

}
