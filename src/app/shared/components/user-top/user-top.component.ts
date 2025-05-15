import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-top',
  imports: [NgClass],
  templateUrl: './user-top.component.html',
  styleUrl: './user-top.component.scss'
})
export class UserTopComponent {
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
