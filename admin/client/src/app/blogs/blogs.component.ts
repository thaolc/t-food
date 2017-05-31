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

  dataTable;
  arrId: string[] = [];

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {
    this.renderDatatable();
  }

  // Navigate to add-new screen
  onNavigateNew() {
    this.router.navigate(['/blog/new']);
  }

  // Navigate to update screen
  onNavigateUpdate(id) {
    this.router.navigate(['/blog/update', id]);
  }

  // Delete selected records
  onDeleteMany() {
    if(confirm('Are you sure you want to delete selected blogs?')) {
      this.blogService.deleteMany(this.arrId)
        .then(() => this.dataTable.ajax.reload())
        .catch(err => console.log(err))
    }
  }

  // Delete current record
  onDeleteOne(id) {
    if(confirm('Are you sure you want to delete this blog?')) {
      this.blogService.delete(id)
        .then(() => this.dataTable.ajax.reload()) // Reload datatable after delete record
        .catch(err => console.log(err))
    }
  }

  // Render datatable
  renderDatatable() {
    let self = this;

    // Basic datatable
    self.dataTable = $('.datatable-blog').DataTable({
      order: [[ 1, "asc" ]],
      processing: true,
      serverSide: true,
      ajax: {
        url: 'http://localhost:3000/api/blogs/datatable',
        type: 'POST'
      },
      rowId: '_id',
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
          className: 'text-center td-actions',
          render: function (data, type, full) {
            return '<a class="btn-edit-record" title="Edit"><i class="icon-pencil3"></i></a>&nbsp;&nbsp;<a class="btn-del-record" title="Delete"><i class="icon-bin"></i></a>';
          }
        }, {
          orderable: false,
          width: '60px',
          targets: [ 0, 6 ]
        }
      ],
      drawCallback: function( settings ) {
        $(".styled, .multiselect-container input").uniform({
          radioClass: 'choice'
        });
      }
    });

    // ------------------------------
    // External table additions
    // ------------------------------

    // Add placeholder to the datatable filter option
    $('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
      minimumResultsForSearch: Infinity,
      width: 'auto'
    });

    // Toggle selected class on row
    $('.datatable-blog tbody').on( 'click', 'tr', function () {
      let id = self.dataTable.row(this).id();
      if(!$(this).hasClass('selected')) {
        $(this).addClass('selected');
        self.arrId.push(id);
      } else {
        $(this).removeClass('selected');
        let index = self.arrId.indexOf(id);
        self.arrId.splice(index, 1);
      }
    });

    // --------------------------------
    // Event click button update record
    // --------------------------------
    $('.datatable-blog tbody').on( 'click', '.btn-edit-record', function() {
      let id = $(this).parents('tr').attr('id');
      self.onNavigateUpdate(id);
      return false;
    });

    // --------------------------------
    // Event click button delete record
    // --------------------------------
    $('.datatable-blog tbody').on( 'click', '.btn-del-record', function() {
      let id = $(this).parents('tr').attr('id');
      self.onDeleteOne(id);
      return false;
    });
  }
}
