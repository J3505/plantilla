import { Component, Host } from '@angular/core';

@Component({
  selector: 'app-right-side',
  imports: [],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss',
  host:{
    class:'flex flex-col gap-4'
  }
})
export class RightSideComponent {

}
