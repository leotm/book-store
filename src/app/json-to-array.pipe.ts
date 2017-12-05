import { Pipe, PipeTransform } from "@angular/core";

import "rxjs/add/operator/map";

@Pipe({ name: "jsonToArray" })
export class JsonToArrayPipe implements PipeTransform {
  transform(books): any {
    const array = [];
    let title;
    for (let OLID in books) {
      title = books[OLID].title;
      array.push({ "OLID, Title": `${OLID}, ${title}`, info: books[OLID] });
    }
    return array;
  }
}
