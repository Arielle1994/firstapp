import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private item: ElementRef) { 
    let dom= item.nativeElement; //document object model:DOM 
    dom.style.backgroundColor= "green";
    dom.innerHTML= '<h4> I was added </h4>';
  }

}
