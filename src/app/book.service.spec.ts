import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book.service';

import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BookService]
    });
  });
  it('should be created', inject([BookService], (bookService: BookService) => {
    expect(bookService).toBeTruthy();
  }));
  it('should get an object (check)', inject([BookService], (bookService: BookService) => {
    // console.log(spyOn(service, 'getBooks').and.returnValue(Observable.of(new Object())));
    bookService.getBooks().subscribe(data => {
      this.data = data;
      //expect does nothing here
      expect(typeof(data)).toEqual('Object');
      return data;
    });
    // console.log(this.data); // undefined
    // so we cannot expect anything here
  }));
  it('tracks that the spy getBooks was called', inject([BookService], (bookService: BookService) => {
    spyOn(bookService, 'getBooks');
    bookService.getBooks();
    expect(bookService.getBooks).toHaveBeenCalled();
  }));
});
