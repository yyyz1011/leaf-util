const expect = require("chai").expect;
const { isWeChatAccount } = require("../../dist/index");

describe("function test: isWeChatAccount", () => {
  it("function test: isWeChatAccount false", () => {
    expect(isWeChatAccount(1)).to.be.equal(false);
  });

  it("function test: isWeChatAccount true", () => {
    expect(isWeChatAccount("yz19991011")).to.be.equal(true);
  });
});
