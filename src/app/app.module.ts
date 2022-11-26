import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ShareModule } from './share/share.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeddingComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
