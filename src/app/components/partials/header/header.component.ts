import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = true;

  ngOnInit() {
    // Beim Initialisieren die gespeicherten Einstellungen abrufen
    const savedMode = localStorage.getItem('darkMode');

    // Wenn der Dark-Modus gespeichert wurde, setze den Status entsprechend
    this.isDarkMode = savedMode === 'true';
    this.applyDarkMode();
  }

  changeColor() {
    this.isDarkMode = !this.isDarkMode; // Toggle the dark mode
    this.applyDarkMode();
    this.saveSettings();
  }

  private applyDarkMode() {
    // Ändern Sie die Klasse des body-Elements basierend auf dem Dark-Modus-Zustand
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('Light');
    } else {
      body.classList.remove('Light');
    }
  }

  private saveSettings() {
    // Speichern Sie den Dark-Modus-Zustand in der localStorage
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }
}
