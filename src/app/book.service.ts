import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get("https://openlibrary.org/api/books?bibkeys=OLID:OL22895148M,OLID:OL6990157M,OLID:OL7101974M,OLID:OL6732939M,OLID:OL7193048M,OLID:OL24347578M,OLID:OL24364628M,OLID:OL24180216M,OLID:OL24948637M,OLID:OL1631378M,OLID:OL979600M,OLID:OL33674M,OLID:OL7950349M,OLID:OL349749M,OLID:OL30460M,OLID:OL24347578M&jscmd=data&format=json");
  }
}

// OL24364628M is missing author Charles Dickens from live data
// However, it exists correctly in books.json
// The display is handled in app.component.html

// could push for...in to array, if simple object

// should be: Lorem ipsum dolor sit amet, conseCTETUR adipiscing elit?

// Book store $, or book shop £?

// https://goo.gl/Lk2MTJ
// Redirect gives blocked by CORS policy
