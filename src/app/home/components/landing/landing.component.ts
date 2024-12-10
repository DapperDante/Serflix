import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: `
  #chairs{
    
  }
    .posters{
      filter: brightness(40%);
      transition-duration: 200ms;
    }
    .posters:hover{
      filter: brightness(1);
    }
    .text-backdrop{
      backdrop-filter: blur(1.5rem);
      padding: 1rem;
    }
    .providers-image{
      border-radius: 20px;
    }
  `
})
export class LandingComponent {
  dataScrollY:number = 0;
  @HostListener('window:scroll', ['$event'])
  ScrollEvent(){
    this.dataScrollY = window.scrollY;
  }
  scrollToElement($element: any): void {
    setTimeout(() => {
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 200);
  }
}
