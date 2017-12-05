const expect = require("chai").expect;
const bookService = require("../book.service");
const sinon = require("sinon");
const request = require("request-promise");

const url = "https://goo.gl/Lk2MTJ";

describe("Book Store", () => {
  describe("Get books", () => {
    const response = { foo: "bar" };
    beforeEach(() => {
      sinon.stub(request, "get").resolves(response);
    });
    afterEach(() => {
      request.get.restore();
    });
    it("1) resolves with book data", async () => {
      const data = await bookService.requestJson();
      expect(data).to.equal(response);
    });
  });
});
