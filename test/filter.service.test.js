const expect = require("chai").expect;
const bookService = require("../book.service");
const filterService = require("../filter.service");
const sinon = require("sinon");

const url = "https://goo.gl/Lk2MTJ";

describe("Book Store", () => {
  describe("Filters", () => {
    const response = {
      "OLID:OL1211111M": { correct: true },
      "OLID:OL1222222M": { correct: true },
      "OLID:OL9999999M": { correct: false }
    };
    const response2 = {
      
    }
    beforeEach(() => {
      sinon.stub(bookService, "requestJson").returns(response);
    });
    afterEach(() => {
      bookService.requestJson.restore();
    });
    it("searches OLIDs", async () => {
      expect(await filterService.search(bookService, "12")).to.eql({
        "OLID:OL1211111M": { correct: true },
        "OLID:OL1222222M": { correct: true }
      });
    });
    it("searches titles", async () => {
      //
    });
  });
});
