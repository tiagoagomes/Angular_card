import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'angular-material';
  curtidas = 0;

  incrementarCurtida() {
    this.curtidas++;
  }
}
