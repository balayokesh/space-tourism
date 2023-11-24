import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {

}
