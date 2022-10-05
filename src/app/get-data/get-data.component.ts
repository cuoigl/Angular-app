import { HttpServerService } from './../services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
    this.httpServerService.getComments().subscribe((data) => {
      console.log('data', data);
    });
  }
}
