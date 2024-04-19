import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tabs-navigator',
  templateUrl: './tabs-navigator.component.html',
  styleUrls: ['./tabs-navigator.component.scss'],
})
export class TabsNavigatorComponent implements OnInit {

  constructor(private route: Router) { }


  ngOnInit() {}

}
