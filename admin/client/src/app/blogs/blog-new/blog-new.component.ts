import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../shared/blog.service';
import { Blog } from '../shared/blog.model';
import { AppConfig } from '../../app.config';

declare var $: any;

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css'],
  providers: [BlogService]
})

export class BlogNewComponent implements OnInit {

  blog: Blog = new Blog();

  constructor(private router: Router, private blogService: BlogService, private config: AppConfig) { }

  ngOnInit() {
    // this.renderFileInput();
  }

  renderFileInput() {
    //
    // Define variables
    //

    // Modal template
    var modalTemplate = '<div class="modal-dialog modal-lg" role="document">\n' +
        '  <div class="modal-content">\n' +
        '    <div class="modal-header">\n' +
        '      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
        '      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n' +
        '    </div>\n' +
        '    <div class="modal-body">\n' +
        '      <div class="floating-buttons btn-group"></div>\n' +
        '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n';

    // Buttons inside zoom modal
    var previewZoomButtonClasses = {
        toggleheader: 'btn btn-default btn-icon btn-xs btn-header-toggle',
        fullscreen: 'btn btn-default btn-icon btn-xs',
        borderless: 'btn btn-default btn-icon btn-xs',
        close: 'btn btn-default btn-icon btn-xs'
    };

    // Icons inside zoom modal classes
    var previewZoomButtonIcons = {
        prev: '<i class="icon-arrow-left32"></i>',
        next: '<i class="icon-arrow-right32"></i>',
        toggleheader: '<i class="icon-menu-open"></i>',
        fullscreen: '<i class="icon-screen-full"></i>',
        borderless: '<i class="icon-alignment-unalign"></i>',
        close: '<i class="icon-cross3"></i>'
    };

    // File actions
    var fileActionSettings = {
        zoomClass: 'btn btn-link btn-xs btn-icon',
        zoomIcon: '<i class="icon-zoomin3"></i>',
        dragClass: 'btn btn-link btn-xs btn-icon',
        dragIcon: '<i class="icon-three-bars"></i>',
        removeClass: 'btn btn-link btn-icon btn-xs',
        removeIcon: '<i class="icon-trash"></i>',
        indicatorNew: '<i class="icon-file-plus text-slate"></i>',
        indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
        indicatorError: '<i class="icon-cross2 text-danger"></i>',
        indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>'
    };

    //
    // Basic example
    //
    $('.file-input').fileinput({
        browseLabel: 'Browse',
        browseIcon: '<i class="icon-file-plus"></i>',
        uploadIcon: '<i class="icon-file-upload2"></i>',
        removeIcon: '<i class="icon-cross3"></i>',
        layoutTemplates: {
            icon: '<i class="icon-file-check"></i>',
            modal: modalTemplate
        },
        initialCaption: "No file selected",
        previewZoomButtonClasses: previewZoomButtonClasses,
        previewZoomButtonIcons: previewZoomButtonIcons,
        fileActionSettings: fileActionSettings
    });
  }
  // Save data
  onSubmit(blogForm) {
    let file = $('.file-input')[0].files;
    this.uploadFile(file, blogForm);
  }

  uploadFile(file, blogForm) {
    let self = this;

    if(file.length) {
      var url = this.config.apiUrl + "commons/uploader";
      var xhr = new XMLHttpRequest();
      var fd = new FormData();
      xhr.open("POST", url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          // Every thing ok, file uploaded
          console.log(xhr.responseText); // handle response.
          self.save(blogForm);
        }
      };
      fd.append('uploaded_file', file);
      xhr.send(fd);
    }
  }

  save(blogForm) {
    this.blogService.create(this.blog)
      .then(() => {
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
