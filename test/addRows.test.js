import "../src/index";
//import  * as T from "@tidyjs/tidy";
//const { tidy, addRows, addItems } = require("@tidy/tidy");
/*const functions = require("../src/index");



console.log(T)

Array.prototype.addRows = function () {
  return T["addRows"].apply(null, arguments)(this);
};*/

describe("addRows", () => {
  it("addRows works", () => {
    //expect(T.addRows).toBe(T.addItems);

    const data = [
      { a: 1, b: 10, c: 100 },
      { a: 2, b: 20, c: 200 }
    ];
    const results = data.addRows({ a: 3, b: 30, c: 300 });
    expect(results).toEqual([
      { a: 1, b: 10, c: 100 },
      { a: 2, b: 20, c: 200 },
      { a: 3, b: 30, c: 300 }
    ]);
  });

  it("works with function", () => {
    const data = [
      { a: 1, b: 10, c: 100 },
      { a: 2, b: 20, c: 200 }
    ];

    expect(
      data.addRows((items) => [
        {
          a: items.length,
          b: items.length * 2,
          c: items.length * 4
        },
        {
          a: items.length * 2,
          b: items.length * 4,
          c: items.length * 8
        }
      ])
    ).toEqual([
      { a: 1, b: 10, c: 100 },
      { a: 2, b: 20, c: 200 },
      { a: 2, b: 4, c: 8 },
      { a: 4, b: 8, c: 16 }
    ]);

    expect(
      data.addRows((items) => ({
        a: items.length,
        b: items.length * 2,
        c: items.length * 4
      }))
    ).toEqual([
      { a: 1, b: 10, c: 100 },
      { a: 2, b: 20, c: 200 },
      { a: 2, b: 4, c: 8 }
    ]);
  });
});
