// https://docs.cypress.io/api/introduction/api.html
describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("loads the app", () => {
    cy.get("#page").should("be.visible");
  });
  it("test for input", () => {
    cy.get("#addTask").type("Task 1");
    cy.wait(500);
    cy.get("#addTask").submit("prevent");
    cy.get("#addTask").type("Task 2");
    cy.wait(500);
    cy.get("#addTask").submit("prevent");
    cy.get("#addTask").type("Task 3");
    cy.wait(500);
    cy.get("#addTask").submit("prevent");

    cy.get("#tasks")
      .first()
      .should("contain", "Task 1");
    cy.wait(1000);

    cy.get("#check")
      .first()
      .click();
    cy.wait(1000);

    cy.get("#text").should("have.css", "color", "rgb(175, 175, 173)");

    cy.get("#tabs>label")
      .eq(1)
      .click();
    cy.wait(1000);
    cy.get("#tabs>label")
      .eq(2)
      .click();
    cy.wait(1000);
    cy.get("#tabs>label")
      .first()
      .click();
    cy.wait(1500);

    cy.get("#delete")
      .first()
      .invoke("show");
    cy.wait(500);
    cy.get("#delete").click();
    cy.wait(500);

    cy.get("#check")
      .first()
      .click();
    cy.get("#text").should("have.css", "color", "rgb(175, 175, 173)");
    cy.wait(1000);

    cy.get("#clear").click();
  });
});
