import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsimagePipe } from './assetsImage/assetsimage.pipe';



@NgModule({
  declarations: [AssetsimagePipe],
  imports: [
    CommonModule,
  ],
  exports :[
    AssetsimagePipe
  ]
})
export class PipeModule { }
