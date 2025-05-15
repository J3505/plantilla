import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LeftFiltersComponent } from "../../shared/components/left-filters/left-filters.component";
import { ChartComponent } from "../../shared/components/chart/chart.component";

@Component({
  selector: 'app-starred',
  imports: [NgClass, LeftFiltersComponent, ChartComponent],
  templateUrl: './starred.component.html',
  styleUrl: './starred.component.scss'
})
export default class StarredComponent {
   users = [
    {
      name: 'Armin A.',
      image:
        'https://storage.googleapis.com/a1aa/image/ddd36401-0dd3-49ff-6148-311fcee69a06.jpg',
      alt: 'Profile',
    },
    {
      name: 'Eren Y.',
      image:
        'https://storage.googleapis.com/a1aa/image/206ed9b2-d39b-4518-8968-cf97d7b2ae3e.jpg',
      alt: 'Profile ',
    },
    {
      name: 'Mikasa A.',
      image:
        'https://storage.googleapis.com/a1aa/image/8a65bfc5-38dc-4645-0e14-aefdd1ac4fbc.jpg',
      alt: 'Profile ',
    },
  ];

  actions = [
    {
      id: 'settingsBtn',
      ariaLabel: 'Settings',
      iconClass: 'icon-[oui--app-advanced-settings]',
    },
    {
      id: 'downloadBtn',
      ariaLabel: 'Download',
      iconClass: 'icon-[lucide--download]',
    },
    {
      id: 'shareBtn',
      ariaLabel: 'Share',
      iconClass: 'icon-[solar--share-broken]',
    },
  ];
}
