describe("Search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should verify the search functionality", () => {
    cy.get("input").type("typescript");
    cy.get(".skeleton").should("be.visible");
    cy.get("tbody").should("be.visible");
    cy.get("tbody > tr").should("have.length", 5);
  });

  it("should verify the pagination functionality", () => {
    cy.get("tbody").should("be.visible");
    cy.get("button").contains("Next").click();
    cy.get(".skeleton").should("be.visible");
    cy.get("tbody").should("be.visible");
    cy.get("tbody > tr").should("have.length", 5);
    cy.get("button").contains("Previous").click();
    cy.get("tbody").should("be.visible");
    cy.get("tbody > tr").should("have.length", 5);
  });

  it("should verify the sort functionality", () => {
    cy.get("th").contains("Stars").click();
    cy.get(".skeleton").should("be.visible");
    cy.get("tbody").should("be.visible");
    cy.get("tbody > tr").should("have.length", 5);
  });
});
