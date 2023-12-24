import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-toggle-sort-button',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './toggle-sort-button.component.html',
  styleUrls: ['./toggle-sort-button.component.css'] // styleUrl zu styleUrls ändern
})
export class ToggleSortButtonComponent {
  isToggled = false;

  onClick() {
    this.isToggled = !this.isToggled;
  }
}