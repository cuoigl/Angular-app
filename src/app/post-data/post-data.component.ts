import { HttpServerService } from './../services/http-server.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss'],
})
export class PostDataComponent implements OnInit {
  public formDataNew = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private common: CommonService,
    private httpServerService: HttpServerService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const payload = this.formDataNew.value;
    this.httpServerService.postPost(payload).subscribe((data) => {
      console.log('postPost', data);
    });
  }
}
