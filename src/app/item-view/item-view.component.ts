import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  @Input()
  item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
