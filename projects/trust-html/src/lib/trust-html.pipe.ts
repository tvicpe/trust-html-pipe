import { Pipe, PipeTransform, SecurityContext, VERSION } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trustHtml'
})
export class TrustHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(htmlString: string): any {
    let result;

    if (!VERSION || VERSION.major === '2') {
      result = this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      result = this.sanitizer.sanitize(SecurityContext.HTML, htmlString);
    }

    return result;
  }

}
