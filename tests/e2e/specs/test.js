// https://docs.cypress.io/api/introduction/api.html
describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("loads the app", () => {
    cy.get("#page").should("be.visible");
  });

  it("test for input", () => {
    cy.get("#addTask")
      .type("Task 1")
      .submit("prevent");
    cy.get("#addTask")
      .type("Task 2")
      .submit("prevent");
    cy.get("#addTask")
      .type("Task 3")
      .submit("prevent");
    cy.get("#addTask").submit("prevent");

    cy.get("#tasks>label").should("contain", "Task 1", "Task 2", "Task 3");
    cy.get("#tasks>label").should("have.length", 3);
  });
  it("change status", () => {
    cy.get("#addTask")
      .type("Task 1")
      .submit("prevent");

    cy.get("#tasks>label")
      .first()
      .click();

    cy.get("#tasks>label #checkbox")
      .first()
      .should("be.checked");
  });
  it("test for footer tabs", () => {
    cy.get("#addTask")
      .type("Task 1")
      .submit("prevent");
    cy.get("#addTask")
      .type("Task 2")
      .submit("prevent");
    cy.get("#addTask")
      .type("Task 3")
      .submit("prevent");

    cy.get("#tasks>label")
      .first()
      .click();

    cy.get("#tabs>label")
      .eq(1)
      .click();
    cy.get("#tasks>label #checkbox").should("not.be.visible");

    cy.get("#tabs>label")
      .eq(2)
      .click();
    cy.get("#tasks>label #checkbox").should("be.checked");

    cy.get("#tabs>label")
      .first()
      .click();
    cy.get("#tasks>label #checkbox").should("have.length", 3);
  });
  it("delete one task", () => {
    cy.get("#addTask")
      .type("Task 1")
      .submit("prevent");

    cy.get("#tasks>label #delete")
      .eq(0)
      .invoke("show")
      .click();
    cy.get("#tasks>label").should("have.length", 0);
  });
  it("delete all task", () => {
    cy.get("#addTask")
      .type("Task 1")
      .submit("prevent");
    cy.get("#addTask")
      .type("Task 2")
      .submit("prevent");
    cy.get("#addTask")
      .type("Task 3")
      .submit("prevent");

    cy.get("#clear").click();
    cy.get("#tasks>label").should("have.length", 3);

    cy.get("#tasks>label").click({ multiple: true });
    cy.get("#tasks>label #checkbox").should("be.checked");

    cy.get("#clear").click();
    cy.get("#tasks").should("have.length", 0);
  });
});
