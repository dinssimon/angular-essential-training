import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserBrief } from './brief.component';
import {Footer } from './footer.component'
import { Section } from './section.component';

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,UserBrief,Footer,Section],
    bootstrap:[AppComponent]
})
export class AppModule{}
