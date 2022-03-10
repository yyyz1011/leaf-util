const expect = require("chai").expect;
const { isColor } = require("../../dist/index");

describe("function test: isColor", () => {
  it("function test: isColor false", () => {
    expect(isColor(1)).to.be.equal(false);
  });

  it("function test: isColor false", () => {
    expect(isColor("1")).to.be.equal(false);
  });

  it("function test: isColor true", () => {
    expect(isColor("#FFB6C1")).to.be.equal(true);
  });
});
