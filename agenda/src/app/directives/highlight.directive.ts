import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.background = 'red'
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.background = 'cyan'
  }

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.background = 'red'
  }

}
