describe('TestSuite Linio', function(){
    it ('Testeando Linio', function(){
        cy.viewport(1000, 660)
        cy.visit('/')
        cy.get('.input-group > .form-control').type('Laptops')
        cy.get('.btn > .icon').click()
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(1000)
        cy.get('#brand-body > ul > :nth-child(7) > label').click()
        cy.get(':nth-child(3) > li > a > .category-name').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > li > a > .category-name').should('have.text','Notebooks')
        cy.get('.sort-by-title').click()
        cy.get('#sortBy-body > ul > :nth-child(2) > label > .link-low-sm').click()
        cy.url().should('eq', 'https://www.linio.com.pe/c/portatiles/notebooks?brand=Apple&sortBy=price_asc')
    })
})