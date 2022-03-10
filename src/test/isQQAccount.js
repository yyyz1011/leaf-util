const expect = require("chai").expect;
const { isQQAccount } = require("../../dist/index");

describe("function test: isQQAccount", () => {
  it("function test: isQQAccount false", () => {
    expect(isQQAccount(1)).to.be.equal(false);
  });

  it("function test: isQQAccount true", () => {
    expect(isQQAccount(1540032876)).to.be.equal(true);
  });
});
