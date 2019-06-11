import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomUserService } from './shared/random-user.service';
import { HttpClientModule } from '@angular/common/http';
import { TabComponent } from './shared/tab/tab.component';
import { TabsComponent } from './shared/tab/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ RandomUserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
