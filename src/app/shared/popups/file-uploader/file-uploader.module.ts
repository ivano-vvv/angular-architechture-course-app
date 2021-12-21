import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';

import { FileUploaderDirective } from './file-uploader.directive';
import { FileUploaderComponent } from './file-uploader.component';
import { DropZoneDirective } from './directives/drop-zone/drop-zone.directive';

@NgModule({
  declarations: [FileUploaderDirective, FileUploaderComponent, DropZoneDirective],
  imports: [CommonModule, MatDialogModule, ImageCropperModule],
  exports: [FileUploaderDirective],
})
export class FileUploaderModule {}
