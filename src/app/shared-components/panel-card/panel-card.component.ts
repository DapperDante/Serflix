import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-card',
  templateUrl: './panel-card.component.html',
  styles: ``
})
export class PanelCardComponent {
  @Input()
  entertaiments!: any;
  @Output()
  clickEntertaiment =  new EventEmitter<{id: number, title: string, poster_path: string, genresId: number[]}>();
  onClick(id: number, title: string | undefined, poster_path: string, genresId: number[]){
    this.clickEntertaiment.emit({id: id, title: title!, poster_path: poster_path, genresId: genresId});
  }
  console = console;
}
