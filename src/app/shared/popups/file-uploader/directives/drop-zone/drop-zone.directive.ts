import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDropZone]',
})
export class DropZoneDirective {
  @Output() fileDrop = new EventEmitter<FileList>();

  @Output() hover = new EventEmitter<boolean>();

  constructor() {}

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();

    const fileList = event.dataTransfer?.files;

    if (Boolean(fileList)) {
      this.fileDrop.emit(fileList);
      this.hover.emit(false);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();

    this.hover.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    event.preventDefault();

    this.hover.emit(false);
  }
}
