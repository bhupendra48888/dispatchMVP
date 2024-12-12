import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'assetsimage'
})
export class AssetsimagePipe implements PipeTransform {

  transform(value: string = '', defaultImage: string = 'assets/images/logo.png'): string {
       return value ? `assets/images/${value}` : defaultImage;
      }
}
// @Pipe({
//   name: 'logo'
// })
// export class AssetsimagePipe implements PipeTransform {

//   transform(value: string = '', defaultImage: string = 'assets/images/logo.png'): string {
//     // If no specific value is provided, use the default logo path
//     return value ? `assets/images/${value}` : defaultImage;
//   }