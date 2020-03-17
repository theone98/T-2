import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProXComponent } from './components/pro-x/pro-x.component';
import { NewcompComponent } from './components/newcomp/newcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    ProXComponent,
    NewcompComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
