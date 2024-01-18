import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  color: any;

  ngOnInit() {
    // Beim Initialisieren die gespeicherte Farbe abrufen
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
      this.color = savedColor;
    }
  }

  changeColor() {
    // Verwenden Sie Angular-Methoden zum Arbeiten mit dem DOM
    const body = document.body;

    // Überprüfen Sie den Zustand des Schalters
    const checkBox = document.getElementById('myCheck') as HTMLInputElement;

    // Ändern Sie die Klasse des body-Elements basierend auf dem Schalterzustand
    if (checkBox.checked) {
      body.classList.remove('Light');
    } else {
      body.classList.add('Light');
    }
  }

  // localStorage.setItem('selectedColor', this.color);
}
