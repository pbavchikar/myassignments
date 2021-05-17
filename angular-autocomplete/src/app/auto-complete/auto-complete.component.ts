import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  @Input() url: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchText = '';
  timeout = null;
  show = false;
  searchTickers = [{
    symbol:'',
    name:''
  }];
  clearEverything(){
    this.clear();
    this.hide();
  }

  open() {
    this.show = true
  }
  hide() {
    this.show = false
  }
  clear() {
    this.searchText = ''
  }
  
  fetchResults(searchInput: any, count: any) {
    if (!searchInput) this.hide();
    this.http.get<any>(this.url + `&query=${searchInput}`).subscribe(data => {
      console.log(data)
      this.searchTickers = data;
    })
  }
  search(val: any) {
    this.search = val;
    if (val != '') {
        this.show = true

        this.fetchResults(this.search, 10)

    } else {
      this.clear();
      this.hide();
    }
  }
}
