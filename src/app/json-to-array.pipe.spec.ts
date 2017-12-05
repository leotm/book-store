import { TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { JsonToArrayPipe } from "./json-to-array.pipe";

describe('JsonToArrayPipe', () => {
  let pipe: JsonToArrayPipe;
  const json = {
      "OLID:OL24364628M": {
          "publishers": [
              {
                  "name": "S.H. Goetzel"
              }
          ],
          "pagination": "368 p. ;",
          "identifiers": {
              "openlibrary": [
                  "OL24364628M"
              ]
          },
          "title": "Great expectations",
          "url": "https://openlibrary.org/books/OL24364628M/Great_expectations",
          "number_of_pages": 368,
          "cover": {
              "small": "https://covers.openlibrary.org/b/id/6995592-S.jpg",
              "large": "https://covers.openlibrary.org/b/id/6995592-L.jpg",
              "medium": "https://covers.openlibrary.org/b/id/6995592-M.jpg"
          },
          "subject_places": [
              {
                  "url": "https://openlibrary.org/subjects/place:england",
                  "name": "England"
              },
              {
                  "url": "https://openlibrary.org/subjects/place:great_britain",
                  "name": "Great Britain"
              },
              {
                  "url": "https://openlibrary.org/subjects/place:united_states",
                  "name": "United States"
              },
              {
                  "url": "https://openlibrary.org/subjects/place:canada",
                  "name": "Canada"
              },
              {
                  "url": "https://openlibrary.org/subjects/place:italy",
                  "name": "Italy"
              }
          ],
          "subjects": [
              {
                  "url": "https://openlibrary.org/subjects/fiction",
                  "name": "Fiction"
              },
              {
                  "url": "https://openlibrary.org/subjects/young_men",
                  "name": "Young men"
              },
              {
                  "url": "https://openlibrary.org/subjects/benefactors",
                  "name": "Benefactors"
              },
              {
                  "url": "https://openlibrary.org/subjects/ex-convicts",
                  "name": "Ex-convicts"
              },
              {
                  "url": "https://openlibrary.org/subjects/revenge",
                  "name": "Revenge"
              },
              {
                  "url": "https://openlibrary.org/subjects/man-woman_relationships",
                  "name": "Man-woman relationships"
              },
              {
                  "url": "https://openlibrary.org/subjects/orphans",
                  "name": "Orphans"
              },
              {
                  "url": "https://openlibrary.org/subjects/poor_children",
                  "name": "Poor children"
              },
              {
                  "url": "https://openlibrary.org/subjects/juvenile_fiction",
                  "name": "Juvenile fiction"
              },
              {
                  "url": "https://openlibrary.org/subjects/coming_of_age",
                  "name": "Coming of age"
              },
              {
                  "url": "https://openlibrary.org/subjects/history",
                  "name": "History"
              },
              {
                  "url": "https://openlibrary.org/subjects/social_life_and_customs",
                  "name": "Social life and customs"
              },
              {
                  "url": "https://openlibrary.org/subjects/description_and_travel",
                  "name": "Description and travel"
              },
              {
                  "url": "https://openlibrary.org/subjects/readers",
                  "name": "Readers"
              },
              {
                  "url": "https://openlibrary.org/subjects/english_fiction",
                  "name": "English fiction"
              },
              {
                  "url": "https://openlibrary.org/subjects/inheritance_and_succession",
                  "name": "Inheritance and succession"
              },
              {
                  "url": "https://openlibrary.org/subjects/german_language",
                  "name": "German language"
              },
              {
                  "url": "https://openlibrary.org/subjects/social_conditions",
                  "name": "Social conditions"
              },
              {
                  "url": "https://openlibrary.org/subjects/working_class",
                  "name": "Working class"
              },
              {
                  "url": "https://openlibrary.org/subjects/accessible_book",
                  "name": "Accessible book"
              },
              {
                  "url": "https://openlibrary.org/subjects/overdrive",
                  "name": "OverDrive"
              },
              {
                  "url": "https://openlibrary.org/subjects/classic_literature",
                  "name": "Classic Literature"
              },
              {
                  "url": "https://openlibrary.org/subjects/protected_daisy",
                  "name": "Protected DAISY"
              },
              {
                  "url": "https://openlibrary.org/subjects/in_library",
                  "name": "In library"
              },
              {
                  "url": "https://openlibrary.org/subjects/examinations",
                  "name": "Examinations"
              },
              {
                  "url": "https://openlibrary.org/subjects/study_guides",
                  "name": "Study guides"
              },
              {
                  "url": "https://openlibrary.org/subjects/large_type_books",
                  "name": "Large type books"
              },
              {
                  "url": "https://openlibrary.org/subjects/conduct_of_life",
                  "name": "Conduct of life"
              },
              {
                  "url": "https://openlibrary.org/subjects/industrial_revolution",
                  "name": "Industrial revolution"
              },
              {
                  "url": "https://openlibrary.org/subjects/social_classes",
                  "name": "Social classes"
              },
              {
                  "url": "https://openlibrary.org/subjects/politics_and_government",
                  "name": "Politics and government"
              },
              {
                  "url": "https://openlibrary.org/subjects/newspapers",
                  "name": "Newspapers"
              }
          ],
          "subject_people": [
              {
                  "url": "https://openlibrary.org/subjects/person:charles_dickens_(1812-1870)",
                  "name": "Charles Dickens (1812-1870)"
              },
              {
                  "url": "https://openlibrary.org/subjects/person:pip",
                  "name": "Pip"
              },
              {
                  "url": "https://openlibrary.org/subjects/person:miss_havisham",
                  "name": "Miss Havisham"
              }
          ],
          "key": "/books/OL24364628M",
          "authors": [
              {
                  "url": "https://openlibrary.org/authors/OL24638A/Charles_Dickens",
                  "name": "Charles Dickens"
              }
          ],
          "publish_date": "1863",
          "by_statement": "by Charles Dickens",
          "publish_places": [
              {
                  "name": "Mobile"
              }
          ],
          "subject_times": [
              {
                  "url": "https://openlibrary.org/subjects/time:19th_century",
                  "name": "19th century"
              }
          ],
          "ebooks": [
              {
                  "formats": {
                      "pdf": {
                          "url": "https://archive.org/download/greatexpectatio00dick/greatexpectatio00dick.pdf"
                      },
                      "epub": {
                          "url": "https://archive.org/download/greatexpectatio00dick/greatexpectatio00dick.epub"
                      },
                      "text": {
                          "url": "https://archive.org/download/greatexpectatio00dick/greatexpectatio00dick_djvu.txt"
                      }
                  },
                  "preview_url": "https://archive.org/details/greatexpectatio00dick",
                  "read_url": "https://archive.org/stream/greatexpectatio00dick",
                  "availability": "full"
              }
          ]
      }
  }
  const array = [{
    "OLID, Title": "OLID:OL24364628M, Great expectations",
      "info": {
          "publishers": [
              {
                  "name": "S.H. Goetzel"
              }
          ],
          "pagination": "368 p. ;",
          "identifiers": {
              "openlibrary": [
                  "OL24364628M"
              ]
          },
          "title": "Great expectations",
          "url": "https://openlibrary.org/books/OL24364628M/Great_expectations",
          "number_of_pages": 368,
          "cover": {
              "small": "https://covers.openlibrary.org/b/id/6995592-S.jpg",
              "large": "https://covers.openlibrary.org/b/id/6995592-L.jpg",
              "medium": "https://covers.openlibrary.org/b/id/6995592-M.jpg"
          },
          "subject_places": [
              {
                  "url": "https://openlibrary.org/subjects/place:england",
                  "name": "England"
              },
              {
                  "url": "https://openlibrary.org/subjects/place:great_britain",
                  "name": "Great Britain"
              },
              {
                  "url": "https://openlibrary.org/subjects/place:united_states",
                  "name": "United States"
              },
              {
                  "url": "https://openlibrary.org/subjects/place:canada",
                  "name": "Canada"
              },
              {
                  "url": "https://openlibrary.org/subjects/place:italy",
                  "name": "Italy"
              }
          ],
          "subjects": [
              {
                  "url": "https://openlibrary.org/subjects/fiction",
                  "name": "Fiction"
              },
              {
                  "url": "https://openlibrary.org/subjects/young_men",
                  "name": "Young men"
              },
              {
                  "url": "https://openlibrary.org/subjects/benefactors",
                  "name": "Benefactors"
              },
              {
                  "url": "https://openlibrary.org/subjects/ex-convicts",
                  "name": "Ex-convicts"
              },
              {
                  "url": "https://openlibrary.org/subjects/revenge",
                  "name": "Revenge"
              },
              {
                  "url": "https://openlibrary.org/subjects/man-woman_relationships",
                  "name": "Man-woman relationships"
              },
              {
                  "url": "https://openlibrary.org/subjects/orphans",
                  "name": "Orphans"
              },
              {
                  "url": "https://openlibrary.org/subjects/poor_children",
                  "name": "Poor children"
              },
              {
                  "url": "https://openlibrary.org/subjects/juvenile_fiction",
                  "name": "Juvenile fiction"
              },
              {
                  "url": "https://openlibrary.org/subjects/coming_of_age",
                  "name": "Coming of age"
              },
              {
                  "url": "https://openlibrary.org/subjects/history",
                  "name": "History"
              },
              {
                  "url": "https://openlibrary.org/subjects/social_life_and_customs",
                  "name": "Social life and customs"
              },
              {
                  "url": "https://openlibrary.org/subjects/description_and_travel",
                  "name": "Description and travel"
              },
              {
                  "url": "https://openlibrary.org/subjects/readers",
                  "name": "Readers"
              },
              {
                  "url": "https://openlibrary.org/subjects/english_fiction",
                  "name": "English fiction"
              },
              {
                  "url": "https://openlibrary.org/subjects/inheritance_and_succession",
                  "name": "Inheritance and succession"
              },
              {
                  "url": "https://openlibrary.org/subjects/german_language",
                  "name": "German language"
              },
              {
                  "url": "https://openlibrary.org/subjects/social_conditions",
                  "name": "Social conditions"
              },
              {
                  "url": "https://openlibrary.org/subjects/working_class",
                  "name": "Working class"
              },
              {
                  "url": "https://openlibrary.org/subjects/accessible_book",
                  "name": "Accessible book"
              },
              {
                  "url": "https://openlibrary.org/subjects/overdrive",
                  "name": "OverDrive"
              },
              {
                  "url": "https://openlibrary.org/subjects/classic_literature",
                  "name": "Classic Literature"
              },
              {
                  "url": "https://openlibrary.org/subjects/protected_daisy",
                  "name": "Protected DAISY"
              },
              {
                  "url": "https://openlibrary.org/subjects/in_library",
                  "name": "In library"
              },
              {
                  "url": "https://openlibrary.org/subjects/examinations",
                  "name": "Examinations"
              },
              {
                  "url": "https://openlibrary.org/subjects/study_guides",
                  "name": "Study guides"
              },
              {
                  "url": "https://openlibrary.org/subjects/large_type_books",
                  "name": "Large type books"
              },
              {
                  "url": "https://openlibrary.org/subjects/conduct_of_life",
                  "name": "Conduct of life"
              },
              {
                  "url": "https://openlibrary.org/subjects/industrial_revolution",
                  "name": "Industrial revolution"
              },
              {
                  "url": "https://openlibrary.org/subjects/social_classes",
                  "name": "Social classes"
              },
              {
                  "url": "https://openlibrary.org/subjects/politics_and_government",
                  "name": "Politics and government"
              },
              {
                  "url": "https://openlibrary.org/subjects/newspapers",
                  "name": "Newspapers"
              }
          ],
          "subject_people": [
              {
                  "url": "https://openlibrary.org/subjects/person:charles_dickens_(1812-1870)",
                  "name": "Charles Dickens (1812-1870)"
              },
              {
                  "url": "https://openlibrary.org/subjects/person:pip",
                  "name": "Pip"
              },
              {
                  "url": "https://openlibrary.org/subjects/person:miss_havisham",
                  "name": "Miss Havisham"
              }
          ],
          "key": "/books/OL24364628M",
          "authors": [
              {
                  "url": "https://openlibrary.org/authors/OL24638A/Charles_Dickens",
                  "name": "Charles Dickens"
              }
          ],
          "publish_date": "1863",
          "by_statement": "by Charles Dickens",
          "publish_places": [
              {
                  "name": "Mobile"
              }
          ],
          "subject_times": [
              {
                  "url": "https://openlibrary.org/subjects/time:19th_century",
                  "name": "19th century"
              }
          ],
          "ebooks": [
              {
                  "formats": {
                      "pdf": {
                          "url": "https://archive.org/download/greatexpectatio00dick/greatexpectatio00dick.pdf"
                      },
                      "epub": {
                          "url": "https://archive.org/download/greatexpectatio00dick/greatexpectatio00dick.epub"
                      },
                      "text": {
                          "url": "https://archive.org/download/greatexpectatio00dick/greatexpectatio00dick_djvu.txt"
                      }
                  },
                  "preview_url": "https://archive.org/details/greatexpectatio00dick",
                  "read_url": "https://archive.org/stream/greatexpectatio00dick",
                  "availability": "full"
              }
          ]
      }
  }]
  beforeEach(() => {
    pipe = new JsonToArrayPipe();
  });
  it('should filter search results', () => {
    expect(pipe.transform(json)).toEqual(array);
  });
});
