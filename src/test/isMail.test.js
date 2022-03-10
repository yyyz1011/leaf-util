const expect = require("chai").expect;
const { isMail } = require("../../dist/index");

describe("function test: isMail", () => {
  it("function test: isMail false", () => {
    expect(isMail("1123@qq.com")).to.be.equal(true);
  });

  it("function test: isMail true", () => {
    expect(isMail("1540032876@qq.com")).to.be.equal(true);
  });
});
