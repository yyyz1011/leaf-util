const expect = require("chai").expect;
const { formatPrice } = require("../../dist/index");

describe("function test: formatPrice", () => {
  it("function test: formatPrice 1", () => {
    expect(formatPrice(1)).to.be.equal('1');
  });

  it("function test: formatPrice 1000", () => {
    expect(formatPrice(1000)).to.be.equal('1,000');
  });

  it("function test: formatPrice 1000001.1", () => {
    expect(formatPrice(1000001.1)).to.be.equal('1,000,001.1');
  });
});
