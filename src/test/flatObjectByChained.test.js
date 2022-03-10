const expect = require("chai").expect;
const { flatObjectByChained } = require("../../dist/index");

describe("function test: flatObjectByChained", () => {
  it("function test: flatObjectByChained { a: { b: 1 } }", () => {
    const req = { a: { b: 1 } };
    const res = { "a.b": 1 };
    expect(flatObjectByChained(req)).to.be.eql(res);
  });

  it("function test: flatObjectByChained", () => {
    const req = {
      a: {
        b: {
          c: {
            d: {
              e: 1,
            },
          },
        },
      },
      f: 2,
    };
    const res = { "a.b.c.d.e": 1, f: 2 };
    expect(flatObjectByChained(req)).to.be.eql(res);
  });
});
