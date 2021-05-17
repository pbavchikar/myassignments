import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  url='https://financialmodelingprep.com/api/v3/search?limit=100&apikey=demo'
}
