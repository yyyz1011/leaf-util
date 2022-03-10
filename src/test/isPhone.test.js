const expect = require("chai").expect;
const { isPhone } = require("../../dist/index");

describe("function test: isPhone", () => {
  it("function test: isPhone false", () => {
    expect(isPhone(1111)).to.be.equal(false);
  });

  it("function test: isPhone false", () => {
    expect(isPhone(13868142750)).to.be.equal(true);
  });

  it("function test: isPhone true", () => {
    expect(isPhone("13868142750")).to.be.equal(true);
  });
});
