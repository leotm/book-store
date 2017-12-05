import { Component, OnInit } from "@angular/core";
import { BookService } from "./book.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public title = "Book Store";
  public subtitle = "The biggest choice on the web";
  public books: Object;
  public term: String;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => (this.books = data));
  }
}
