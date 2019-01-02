import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from '../services/dashboard.service';

@NgModule({
  exports: []
})
export class DashboardSharedModule { }

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardSharedModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
