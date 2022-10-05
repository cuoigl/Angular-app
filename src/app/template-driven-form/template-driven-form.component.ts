import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  public name = '';

  constructor(private common: CommonService) {}

  ngOnInit(): void {}

  public submitForm(): void {
    // console.log('submitForm: name: ' + this.name);
    this.common.submitData({ name: this.name, age: 12 });
  }
}
