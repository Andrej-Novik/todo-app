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
    cy.get("#addTask").submit("prevent");
    cy.get("#addTask").type("Task 2");
    cy.get("#addTask").submit("prevent");
    cy.get("#addTask").type("Task 3");
    cy.get("#addTask").submit("prevent");

    cy.get("#tasks").should("contain", "Task 1");

    cy.get("#tasks>label")
      .first()
      .click();

    cy.get("#tasks>label #text")
      .first()
      .should("have.css", "color", "rgb(175, 175, 173)");

    cy.get("#tabs>label")
      .eq(1)
      .click();
    cy.get("#tasks>label #text").should("have.css", "color", "rgb(0, 0, 0)");

    cy.get("#tabs>label")
      .eq(2)
      .click();
    cy.get("#tasks>label #text").should(
      "have.css",
      "color",
      "rgb(175, 175, 173)"
    );
    cy.get("#tabs>label")
      .first()
      .click();
    cy.get("#tasks>label #text").should(
      "have.css",
      "color",
      "rgb(175, 175, 173)"
    );

    cy.get("#tasks>label #delete")
      .eq(0)
      .invoke("show")
      .click();
    cy.get("#tasks").should("have.length", 1);

    cy.get("#tasks>label").click({ multiple: true });
    cy.get("#tasks>label #text").should(
      "have.css",
      "color",
      "rgb(175, 175, 173)"
    );

    cy.get("#clear").click();
    cy.get("#tasks").should("have.length", 0);
  });
});
