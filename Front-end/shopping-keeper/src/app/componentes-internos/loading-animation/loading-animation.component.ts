import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss'],
})
export class LoadingAnimationComponent implements OnInit {

  w

  constructor(private el: ElementRef) {

  }

  ShowElement(): void {
    console.log(this.el.nativeElement.querySelector('.animation-container').style)
  }

  ngOnInit() {
    this.ShowElement()
  }

}
