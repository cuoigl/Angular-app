import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public counter = 0;

  constructor() {}

  public Exponential(n: number): number {
    return n * n;
  }

  public submitData(data: any): void {
    console.log('Send Data to server. Data: ', data);
  }
}
