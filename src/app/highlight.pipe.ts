import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, searchTerm: string): SafeHtml {
    if (!searchTerm) {
      return this.sanitizer.bypassSecurityTrustHtml(value); 
    }

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const highlighted = value.replace(regex, `<span style="background-color: #198754; color: white;">$1</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
