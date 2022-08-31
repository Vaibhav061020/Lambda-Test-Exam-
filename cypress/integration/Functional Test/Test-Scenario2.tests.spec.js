/// <reference types="cypress-xpath" />

describe("Accessibility check of from", () => {
  it("Verify the accessibility of form", () => {
    //using the samsung port 9 for each port
    cy.viewport("samsung-note9");
    cy.visit("https://www.lambdatest.com/selenium-playground");
    cy.url().should("include", "lambdatest");
    //navigate to the input form
    cy.xpath("//a[normalize-space()='Input Form Submit']").click();
    //check the accessibility
    cy.injectAxe();
    //check the accessibility of form only
    cy.checkA11y(".loginform");
    //check the accessibility of the whole page
    cy.checkA11y();
  });

  it("check the accessibility of the whole page ", () => {
    //using the samsung port 9 for each port
    cy.viewport("samsung-note9");
    //check the accessibility
    cy.injectAxe();
    cy.checkA11y();
  });

  it("Fill the form", () => {
    //Fill the form
    cy.xpath("//input[@placeholder='Name']").type("vaibhav");
    cy.get("input[placeholder='Email']").type("xyz@gmail.com");
    cy.xpath("//input[@placeholder='Password']").type("xyz123");
    cy.xpath("//input[@placeholder='Company']").type("xyx.co.in");
    cy.get("input[placeholder='Website']").type("https://www.xyz.com");
    cy.xpath("//select[@name='country']").select("India");

    cy.get("#inputCity").type("pune");
    cy.xpath("//input[@placeholder='Address 1']").type("pune deccane");
    cy.get("input[placeholder='Address 2']").type("pune hadapsar");
    cy.xpath("//input[@placeholder='State']").type("maharashtra");
    cy.xpath("//input[@placeholder='Zip code']").type("411013");
    cy.xpath("(//button[@type='submit'])[2]").click();
    cy.get(".success-msg").should(
      "contain",
      "Thanks for contacting us, we will get back to you shortly."
    );
  });

  it("Use the lighthouse plugins", () => {
    const customThresholds = {
      performance: 50,
      accessibility: 50,
      seo: 70,
      "first-contentful-paint": 2000,
      "largest-contentful-paint": 3000,
      "cumulative-layout-shift": 0.1,
      "total-blocking-time": 500,
    };

    const desktopConfig = {
      formFactor: "desktop",
      screenEmulation: { disabled: true },
    };

    cy.lighthouse(customThresholds, desktopConfig);
  });
});
