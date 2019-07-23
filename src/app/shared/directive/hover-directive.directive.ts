import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective implements OnInit {
  @Input() backgroundColor: string; constructor(private elem: ElementRef) {}
  ngOnInit(): void {
    this.elem.nativeElement.style.background = this.backgroundColor;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.elem.nativeElement.style.background = 'gray';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.background = this.backgroundColor;
  }
}
