import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FoodService } from './shared/food.service';
import { Food } from './shared/food.model';
import { AppConfig } from '../app.config';

declare var $: any;

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  providers: [ FoodService ]
})
export class FoodsComponent implements OnInit {

  dataTable;
  arrId: string[] = [];

  constructor(private router: Router, private foodService: FoodService, private config: AppConfig) { }

  ngOnInit() {
    this.renderDatatable();
  }

  // Navigate to add-new screen
  onNavigateNew() {
    this.router.navigate(['/food/new']);
  }

  // Navigate to update screen
  onNavigateUpdate(id) {
    this.router.navigate(['/food/update', id]);
  }

  // Delete selected records
  onDeleteMany() {
    if(confirm('Are you sure you want to delete selected foods?')) {
      this.foodService.deleteMany(this.arrId)
        .subscribe(() => this.dataTable.ajax.reload())
    }
  }

  // Delete current record
  onDeleteOne(id) {
    if(confirm('Are you sure you want to delete this food?')) {
      this.foodService.delete(id)
        .subscribe(() => this.dataTable.ajax.reload()) // Reload datatable after delete record
    }
  }

  // Render datatable
  renderDatatable() {
    let self = this;

    // Basic datatable
    self.dataTable = $('.datatable-food').DataTable({
      order: [[ 1, "asc" ]],
      processing: true,
      serverSide: true,
      ajax: {
        url: self.config.apiUrl + 'foods/datatable',
        type: 'POST'
      },
      rowId: '_id',
      columns: [
        { 'data': null },
        { 'data': 'name' },
        { 'data': 'price' },
        { 'data': 'image' },
        { 'data': 'description' },
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
          targets: [5],
          className: 'text-center td-actions',
          render: function (data, type, full) {
            return '<a class="btn-edit-record" title="Edit"><i class="icon-pencil3"></i></a>&nbsp;&nbsp;<a class="btn-del-record" title="Delete"><i class="icon-bin"></i></a>';
          }
        }, {
          orderable: false,
          width: '60px',
          targets: [ 0, 5 ]
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
    $('.datatable-food tbody').on( 'click', 'tr', function () {
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
    $('.datatable-food tbody').on( 'click', '.btn-edit-record', function() {
      let id = $(this).parents('tr').attr('id');
      self.onNavigateUpdate(id);
      return false;
    });

    // --------------------------------
    // Event click button delete record
    // --------------------------------
    $('.datatable-food tbody').on( 'click', '.btn-del-record', function() {
      let id = $(this).parents('tr').attr('id');
      self.onDeleteOne(id);
      return false;
    });
  }

}
