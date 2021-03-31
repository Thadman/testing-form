describe("My first test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("Visit the home page", () => {
  it("Will visit the homepage", () => {
    cy.visit("https://localhost:3000");
  });
});
