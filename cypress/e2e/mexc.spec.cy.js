describe('test basic main mexc page', () => {
    it('test mexc main page', () => {
        cy.visit('/mexc-api');
        cy.get('a').contains('Futures').parent()
            .realHover();

            cy.get('li').contains(/^Perpetual Futures$/)
            .realMouseMove(100, 0, { position: "right" })
            
            cy.wait(5000)

            cy.get('USDT-M Perpetual Futures')


    })
});