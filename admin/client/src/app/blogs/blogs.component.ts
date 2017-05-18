import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Basic datatable
    $('.datatable-blog').DataTable({
        order: [[ 1, "asc" ]]
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

}
