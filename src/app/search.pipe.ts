import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: 'search',
  pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform {

  /**
   * @items = object from array
   * @term = term's search
   */
  transform(items: any, term: any): any {
    if (term === undefined) return items;

    return items.filter((item) => {
      for (let property in item) {
        if (item[property] === null) continue;
        if (item[property].toString().toLowerCase().includes(term.toLowerCase())) return true;
      }
      return false;
    })
  }
}