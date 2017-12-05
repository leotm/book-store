import { TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { SearchPipe } from "./search.pipe";

describe('SearchPipe', () => {
  let pipe: SearchPipe;
  let items = [
    ['value', 'value2']
  ];
  let term = 'val';
  beforeEach(() => {
    pipe = new SearchPipe();
  });
  it('should filter search results', () => {
    expect(pipe.transform(items, term)).toEqual(items);
  });
});
