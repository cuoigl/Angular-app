import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public loginType = 'admin';
  public myColor = 'orange';

  constructor() {}

  ngOnInit(): void {}
}
