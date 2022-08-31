const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  "value"
).set;
describe("Accessibility check of from", () => {
  it("Drag & Drop Sliders", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground");
    cy.url().should("include", "lambdatest");
    //navigate to the input form
    cy.xpath("//a[normalize-space()='Input Form Submit']").click();
    cy.get(":nth-child(4) >.inline-block").click();
    cy.xpath("//a[normalize-space()='Drag & Drop Sliders']").click();
  });

  it("Select the slider Default value 95", () => {
    //verify the default value
    cy.get(".sp__range-success > .sp__range").should("have.value", "15");
    cy.get(".sp__range-success > .sp__range").then(($range) => {
      // get the DOM node
      const range = $range[0];
      // set the value manually
      nativeInputValueSetter.call(range, 95);
      // now dispatch the event
      range.dispatchEvent(new Event("change", { value: 15, bubbles: true }));
    });
    cy.get(".sp__range-success > .sp__range").invoke("val", "95");
    cy.get("#rangeSuccess").should("have.value", "95");
  });
});
