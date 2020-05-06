import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { RandomPhotosComponent } from './random-photos/random-photos.component';
import { RandomPhotosService } from './random-photos.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomPhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
