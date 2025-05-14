import { Component } from '@angular/core';
import SidebarComponent from "../sidebar/sidebar.component";
import HeaderComponent from "../header/header.component";

@Component({
  selector: 'app-layout-admin',
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export  default class LayoutAdminComponent {

}
