import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public loginType = 'admin';
  public myColor = 'orange';
  public  counter = 0;
  public counterExpon = 0;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.counter
    this.counterExpon = this.common.Exponential(this.counter);
    this.common.counter++;
  }
}
