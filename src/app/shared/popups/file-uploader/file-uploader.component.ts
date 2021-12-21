import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  hovered = false;

  constructor() {}

  ngOnInit(): void {}

  toggleHovered(value: boolean): void {
    this.hovered = value;
  }
}
