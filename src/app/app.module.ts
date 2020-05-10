import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserBrief } from './brief.component';
import {UserDetails } from './details.component'

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,UserBrief,UserDetails],
    bootstrap:[AppComponent]
})
export class AppModule{}
