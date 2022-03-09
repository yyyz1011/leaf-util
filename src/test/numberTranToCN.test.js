const expect = require("chai").expect;
const { numberTranToCN } = require("../../dist/index");

describe("function test: numberTranToCN", () => {
  it("function test : numberTranToCN 1", () => {
    expect(numberTranToCN(1)).to.be.equal("一");
  });

  it("function test: numberTranToCN 100", () => {
    expect(numberTranToCN(100)).to.be.equal("一百");
  });

  it("function test: numberTranToCN 1001", () => {
    expect(numberTranToCN(1001)).to.be.equal("一千零一");
  });

  it("function test: numberTranToCN 10010", () => {
    expect(numberTranToCN(10010)).to.be.equal("一万零一十");
  });
});
