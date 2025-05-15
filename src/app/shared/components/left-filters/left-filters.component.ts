import { Component } from '@angular/core';

@Component({
  selector: 'app-left-filters',
  imports: [],
  templateUrl: './left-filters.component.html',
  styleUrl: './left-filters.component.scss'
})
export class LeftFiltersComponent {
   filters = [
    {
      name: 'Dribbble',
      image: 'https://storage.googleapis.com/a1aa/image/01394903-323f-4176-94a3-ab1daf4d2a4f.jpg',
      alt: 'Dribbble logo pink circle',
      amount: '$227,459',
      percent: '43%',
    },
    {
      name: 'Instagram',
      image: 'https://storage.googleapis.com/a1aa/image/fa53e791-8891-4732-5105-03b6fa39c7f3.jpg',
      alt: 'Instagram logo orange circle',
      amount: '$142,823',
      percent: '27%',
    },
    {
      name: 'Behance',
      image: 'https://storage.googleapis.com/a1aa/image/fa75e242-45ce-497e-52ec-e09826d171c3.jpg',
      alt: 'Behance logo blue circle',
      amount: '$89,935',
      percent: '11%',
    },
    {
      name: 'Google',
      image: 'https://storage.googleapis.com/a1aa/image/515e4edb-111c-4976-d535-9ae6e1b02495.jpg',
      alt: 'Google logo blue circle',
      amount: '$37,028',
      percent: '7%',
    }
  ];
}
