import { HoverDirectiveDirective } from './hover-directive.directive';
import { ElementRef } from '@angular/core';

describe('HoverDirectiveDirective', () => {
  it('should create an instance', () => {
    const directive = new HoverDirectiveDirective(new ElementRef(''));
    expect(directive).toBeTruthy();
  });
});
