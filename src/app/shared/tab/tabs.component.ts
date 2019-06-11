import { TabComponent } from './tab.component';
import { Component } from '@angular/core';
@Component({
    selector: 'osr-tabs',
    template: `<div class="tab-content"><ng-content></ng-content></div>
                <ul c-tabs l-row u-grid-justify--center u-padding--md>
                    <li *ngFor="let tab of tabs"
                    (click)="selectTab(tab)"
                    [class.selected]="tab.active">
                    <img [class.teb]="tab.active"src="{{ tab.title }}" class="u-image--24">
                    </li>
                </ul>
                `,
    styles: [`li {
        display: inline;
        padding-right: 15px;
        cursor: pointer;
    }
    .teb {
        background: #439539;
    }
    ul {
        margin: auto;
    }
    
    /*.selected {
        background: #439539;
    }*/`]
})
export class TabsComponent {
    tabs: TabComponent[] = [];
  constructor() {}

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.setActive(true);
    }
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => {
      if (t == tab) tab.setActive(true);
      else t.setActive(false);
    });
  }
}