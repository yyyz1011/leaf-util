const expect = require("chai").expect;
const { isObject } = require("../../dist/index");

describe("function test: isObject", () => {
  it("function test: isObject true", () => {
    expect(isObject({})).to.be.equal(true);
  });

  it("function test: isObject true", () => {
    expect(isObject([1, 2, 3])).to.be.equal(true);
  });

  it("function test: isObject true", () => {
    expect(isObject(Function)).to.be.equal(true);
  });

  it("function test: isObject false", () => {
    expect(isObject(null)).to.be.equal(false);
  });
});
