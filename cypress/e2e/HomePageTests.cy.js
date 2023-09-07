describe("Prueba titulo", () => {
  it("Titulo de la pagina", () => {
    cy.visit("https://en.onepiece-cardgame.com/");
    // title ONE PIECE CARD GAME - Official Web Site

    cy.title().should("eq", "ONE PIECE CARD GAME - Official Web Site");
  });
});

describe("Home Page", () => {
  it("Comprbar que estes en el home", () => {
    cy.visit("https://en.onepiece-cardgame.com/");

    cy.get("h2.categoryTitle").eq(0).scrollIntoView().should("be.visible");

    cy.get("h2.categoryTitle").eq(0).should("contain", "TOPICS");
  });
});

describe("Dar click boton aceptar", () => {
  it("Click en boton", () => {
    cy.visit("https://en.onepiece-cardgame.com/");

    cy.wait(1000);

    cy.get("#onetrust-reject-all-handler").click();

    try {
      cy.get("#onetrust-reject-all-handler").click();
    } catch (e) {
      expect(true).to.be.true;
    }
  });
});

describe("Entrar a eventos desde menu", () => {
  it("Click en boton", () => {
    cy.visit("https://en.onepiece-cardgame.com/");
    cy.get("#onetrust-reject-all-handler").click();

    cy.contains("span", "MENU").scrollIntoView().should("be.visible").click();

    cy.wait(1000);

    cy.get("a.navEvents")
      .eq(1)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });

    cy.get("h2.categoryTitle").scrollIntoView().should("be.visible");
    cy.get("h2.categoryTitle").eq(0).should("contain", "EVENTS");
  });
});
