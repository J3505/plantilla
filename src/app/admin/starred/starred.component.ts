import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LeftFiltersComponent } from '../../shared/components/left-filters/left-filters.component';
import { ChartComponent } from '../../shared/components/chart/chart.component';
import { PlataformComponent } from '../../shared/components/plataform/plataform.component';
import { RightSideComponent } from '../../shared/components/right-side/right-side.component';
import { RevenueComponent } from '../../shared/components/revenue/revenue.component';
import { TopSalesComponent } from '../../shared/components/top-sales/top-sales.component';
import { UserTopComponent } from '../../shared/components/user-top/user-top.component';

@Component({
  selector: 'app-starred',
  imports: [
    LeftFiltersComponent,
    ChartComponent,
    PlataformComponent,
    RightSideComponent,
    RevenueComponent,
    TopSalesComponent,
    UserTopComponent,
  ],
  templateUrl: './starred.component.html',
  styleUrl: './starred.component.scss',
})
export default class StarredComponent {}
