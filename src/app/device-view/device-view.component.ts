import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  goItemView(item: any) {
    return [`../devices`, item.id]
  }

}
