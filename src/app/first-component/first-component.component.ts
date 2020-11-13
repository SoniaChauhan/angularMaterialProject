import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor
  (
    private _http: HttpClient,
    private _emp: DetailsService,
    private route: ActivatedRoute,
    ) {  console.log("FirstComponentComponent");}
    Object = Object;

  ngOnInit() {
    console.log("FirstComponentComponent");
  }

}
