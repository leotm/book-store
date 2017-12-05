const bookService = require("./book.service");

exports.search = search;

async function search(bookService, term) {
  const data = await bookService.requestJson();
  const obj = {};
  for (let OLID in data) {
    if (OLID.includes(term)) {
      obj[OLID] = data[OLID];
    }
  }
  return obj;
}
