import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';

//Import Components here
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        NgbModule.forRoot(),
        MaterialModule.forRoot(),
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
