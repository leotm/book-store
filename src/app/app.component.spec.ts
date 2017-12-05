import { TestBed, async, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { JsonToArrayPipe } from './json-to-array.pipe';
import { SearchPipe } from './search.pipe';

import { BookService } from './book.service';

// Jasmin 2.7+, breaking changes :(

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        JsonToArrayPipe,
        SearchPipe
      ],
      imports: [
        HttpClientModule,
        FormsModule
      ],
      providers: [BookService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Book Store'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Book Store');
  }));
  it(`should have as subtitle 'The biggest choice on the web'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.subtitle).toEqual('The biggest choice on the web');
  }));
  it('should render the logo', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img#book-logo').src).toContain('assets/img/Book.png');
  }));
  // it('should render sub-title in a h6 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h6').textContent).toContain('The biggest choice on the web');
  // }));

  // it('should have a spy that tracks that the spy was called', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   spyOn(app, 'ngOnInit');
  //   expect(app.ngOnInit).toHaveBeenCalled();
  // }));

});
