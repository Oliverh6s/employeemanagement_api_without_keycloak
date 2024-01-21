import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = true;

  ngOnInit() {
    const savedMode = localStorage.getItem('darkMode');

    this.isDarkMode = savedMode === 'true';
    this.applyDarkMode();
  }

  changeColor() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
    this.saveSettings();
  }

  private applyDarkMode() {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('Light');
    } else {
      body.classList.remove('Light');
    }
  }

  private saveSettings() {
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }
}
