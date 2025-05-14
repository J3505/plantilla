import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export default class SidebarComponent {

  menuItems = [
    {
      label: 'Starred',
      link: 'starred',
      icon: 'icon-[material-symbols--star-outline-rounded]',
      tooltip: 'Starred',
    },
    {
      label: 'Recent',
      link: 'recent',
      icon: 'icon-[ic--baseline-more-time]',
    },
    {
      label: 'Sales list',
      link: 'saleslist',
      icon: 'icon-[hugeicons--note-edit]',
    },
    {
      label: 'Goals',
      link: 'goals',
      icon: 'icon-[meteor-icons--bolt]',
    },
    {
      label: 'Dashboard',
      link: 'dashboard',
      icon: 'icon-[mage--dashboard]',
      extraIcon: 'icon-[ic--round-plus]',
    },
  ];
}
