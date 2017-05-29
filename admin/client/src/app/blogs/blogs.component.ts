import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from './shared/blog.service';
import { Blog } from './shared/blog.model';

declare var $: any;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [ BlogService ]
})
export class BlogsComponent implements OnInit {

  blogs: any;

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {
    // Basic datatable
    $('.datatable-blog').DataTable({
      order: [[ 1, "asc" ]],
      processing: true,
      serverSide: true,
      ajax: {
        url: 'http://localhost:3000/api/blogs/datatable',
        type: 'POST'
      },
      columns: [
        { 'data': null },
        { 'data': 'title' },
        { 'data': 'image' },
        { 'data': 'content' },
        { 'data': 'date' },
        { 'data': 'author' },
        { 'data': null }
      ],
      columnDefs: [
        {
          targets: [0],
          render: function (data, type, full) {
            return `<div class="checkbox">
                      <label>
                        <input type="checkbox" class="styled">
                      </label>
                    </div>`;
          }
        }, {
          targets: [6],
          className: 'text-center',
          render: function (data, type, full) {
            return '<a title="Edit"><i class="icon-pencil3"></i></a>';
          }
        }
      ]
    });

    // External table additions
    // ------------------------------

    // Add placeholder to the datatable filter option
    $('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
      minimumResultsForSearch: Infinity,
      width: 'auto'
    });

    $(".styled, .multiselect-container input").uniform({
      radioClass: 'choice'
    });


  }

  onNavigate() {
    this.router.navigate(['/blog/new']);
  }

  getAll() {
    this.blogService.list()
      .then(blogs => {
        this.blogs = blogs;
        // console.log(blogs);
      })
      .catch(err => console.log(err));
  }

}
