import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';

import { DeviceService } from './device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Sardorjon Temirov';
  date = new Date();

  selectedFile: File;
  arrayData: Array<any>

  @ViewChild('fileInput') input: ElementRef;

  constructor( private deviceService: DeviceService) {}

  fetchData() {
    this.deviceService.getAll()
      .subscribe(
        data => this.arrayData = data,
        error => console.log(error)
      )
  }

  ngOnInit() {
    this.fetchData();
  }

  onUpload() {
    this.input.nativeElement.click()
  }

  onRemove(event) {
    this.deviceService.delete(event.id)
    .subscribe(
      response => this.fetchData(),
      error => console.log(error));
  }
  onFileChanged(fileInput) {
    this.selectedFile = fileInput.files[0];

    let fileReader = new FileReader();

    fileReader.readAsText(this.selectedFile, "UTF-8");

    fileReader.onload = () => {
     let newData = JSON.parse(fileReader.result as string);
     this.deviceService.create(newData)
      .subscribe (
        response => this.fetchData(),
        error => console.log(error)
      )
    }
    fileReader.onerror = (error) => console.log(error);
  }
}
