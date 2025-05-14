import { Component } from '@angular/core';
import SidebarComponent from "../sidebar/sidebar.component";
import HeaderComponent from "../header/header.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-layout-admin',
  imports: [SidebarComponent, HeaderComponent, RouterModule ],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export  default class LayoutAdminComponent {

}
