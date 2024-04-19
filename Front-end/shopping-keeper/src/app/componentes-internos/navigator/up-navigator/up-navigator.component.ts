import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-navigator',
  templateUrl: './up-navigator.component.html',
  styleUrls: ['./up-navigator.component.scss'],
})
export class UpNavigatorComponent implements OnInit {

  @Input() NavigatorTitle;

  constructor() { }

  ngOnInit() {}

}
