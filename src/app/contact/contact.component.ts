import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
results: string[];
title : string;
   constructor(private http: HttpClient) {}

  ngOnInit() {
     this.http.get('http://api.coindesk.com/v1/bpi/currentprice.json').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['time'];
      this.title="test";
      });
  }

}
