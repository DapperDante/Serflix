import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: `
    .all-posters{
      transform: translateX(-2rem) rotateX(-4deg) rotateY(-10deg) rotateZ(7deg);
      width: max-content;
    }
    .posters{
      filter: brightness(40%);
      transition-duration: 200ms;
    }
    .posters:hover{
      filter: brightness(1);
    }
  `
})
export class LandingComponent {
  scrollToElement($element: any): void {
    console.log($element);
    setTimeout(() => {
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 200);
  }
}
