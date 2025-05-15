import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  host:{
    class:'flex flex-col md:flex-row gap-4'
  }
})
export class ChartComponent {
   logos = [
    {
      src: 'https://storage.googleapis.com/a1aa/image/fa75e242-45ce-497e-52ec-e09826d171c3.jpg',
      alt: 'Behance logo blue circle',
    },
    {
      src: 'https://storage.googleapis.com/a1aa/image/515e4edb-111c-4976-d535-9ae6e1b02495.jpg',
      alt: 'Google logo blue circle',
    },
    {
      src: 'https://storage.googleapis.com/a1aa/image/fa53e791-8891-4732-5105-03b6fa39c7f3.jpg',
      alt: 'Instagram logo orange circle',
    },
  ];

}
