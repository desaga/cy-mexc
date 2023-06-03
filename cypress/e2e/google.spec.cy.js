describe.skip('testing google.com main page', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('textarea[name="q"]')
      .type("Танюшка Сонечко");
// click on Google img to close a drop down in search area to make visible a Search button
    cy.get('[alt="Google"]')
      .click();

    cy.get('input[value="Google Search"]')
      .eq(1)
      .focus()
      .click();
    
    cy.contains('div','Images')
      .parent()
      .click();

    // cy.contains("span", "Images")
    //   .should('be.visible')
    
    cy.contains('a', 'Videos')
      .click()

    // cy.contains('a', 'Books')
      // .click()
  })
})