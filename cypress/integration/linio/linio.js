import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given ('A user enters to the home Linio', ()=>{
    cy.viewport(1000, 660)
    cy.visit('/')
})

When ('A user add Laptops', ()=> {
    cy.get('.input-group > .form-control').type('Laptops')
    cy.get('.btn > .icon').click()
    cy.get(':nth-child(1) > .dropdown-item').click()
    cy.get('#brand-body > ul > :nth-child(7) > label').click()
    cy.get(':nth-child(3) > li > a > .category-name').click()
    cy.get(':nth-child(3) > li > a > .category-name').should('have.text','Notebooks')
    cy.get('.sort-by-title').click()
    cy.get('#sortBy-body > ul > :nth-child(2) > label > .link-low-sm').click()
    cy.url().should('eq', 'https://www.linio.com.pe/c/portatiles/notebooks?brand=Apple&sortBy=price_asc')

})

Then ('Results view in page', ()=>{
    cy.log('Test Complete')
})
