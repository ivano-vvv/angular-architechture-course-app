import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderModule } from './file-uploader';

@NgModule({
  declarations: [],
  imports: [CommonModule, FileUploaderModule],
  exports: [FileUploaderModule],
})
export class PopupsModule {}
