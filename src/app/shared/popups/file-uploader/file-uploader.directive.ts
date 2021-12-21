import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploaderComponent } from './file-uploader.component';

@Directive({
  selector: '[appFileUploader]',
})
export class FileUploaderDirective {
  @Input() multiple?: boolean;
  @Input() crop?: boolean;

  @Output() change = new EventEmitter<string | string[] | null>();

  constructor(private readonly dialog: MatDialog) {}

  @HostListener('click', ['$event'])
  onClick(): void {
    this.openDialog();
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(FileUploaderComponent, {
      width: '550px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.change.emit(result || null);
    });
  }
}
