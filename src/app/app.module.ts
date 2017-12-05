import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { JsonToArrayPipe } from './json-to-array.pipe';
import { SearchPipe } from './search.pipe';

import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    JsonToArrayPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
