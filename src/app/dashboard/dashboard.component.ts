import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'jcb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public res = '';

  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.service.test().subscribe(res => this.res = res);
  }

}
