const expect = require("chai").expect;
const { isColor } = require("../../dist/index");

describe("function test: isColor", () => {
  it("function test : isColor success", () => {
    expect(isColor("#FFB6C1")).to.be.equal(true);
  });

  it("function test: isColor error", () => {
    expect(isColor(1)).to.be.equal(false);
  });
});
