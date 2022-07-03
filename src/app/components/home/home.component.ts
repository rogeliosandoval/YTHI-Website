import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  certs = [
    {imgUrl:'c1'},
    {imgUrl:'c2'},
    {imgUrl:'c3'},
    {imgUrl:'c4'},
    {imgUrl:'c5'},
    {imgUrl:'c6'},
    {imgUrl:'c7'},
    {imgUrl:'c8'},
    {imgUrl:'c9'},
    {imgUrl:'c10'},
    {imgUrl:'c11'},
    {imgUrl:'c12'},
    {imgUrl:'c13'},
    {imgUrl:'c14'},
    {imgUrl:'c15'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
