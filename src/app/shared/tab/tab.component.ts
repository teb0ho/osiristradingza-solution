import { Component, Output, Input, EventEmitter } from '@angular/core'
import { TabsComponent } from './tabs.component';

@Component({
    selector: 'osr-tab',
    template: `<div [hidden]="!active" class="u-text--centered c-card">
               <ng-content></ng-content>
               </div> `,
    styles: [` 
    `]
})
export class TabComponent {
    @Input() title: string;
  @Output() selected = new EventEmitter();
  active: boolean;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }

  setActive(active: boolean) {
    if(!this.active && active) { // if not already active
      this.selected.emit();
    }
    this.active = active;
  }


}