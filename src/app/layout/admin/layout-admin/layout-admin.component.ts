import { Component } from '@angular/core';
import SidebarComponent from "../sidebar/sidebar.component";
import HeaderComponent from "../header/header.component";
import StarredComponent from "../../../admin/starred/starred.component";


@Component({
  selector: 'app-layout-admin',
  imports: [SidebarComponent, HeaderComponent, StarredComponent ],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export  default class LayoutAdminComponent {

}
