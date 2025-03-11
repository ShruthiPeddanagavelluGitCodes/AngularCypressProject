///<reference types="cypress"/>

describe('Assignment project', () => { 
  it('Detailed scenario 1', () => { 
      cy.visit('http://172.31.18.255:4200'); // Start with the base URL
      cy.wait(2000); // Wait for redirect
      cy.url().should('include', '/pages'); // Ensure redirect happens correctly
      cy.screenshot('Sc_1 - 01_Homepage_Loaded'); // Screenshot of homepage

      cy.get('.sidebar-toggle').should('be.visible').click(); 
      cy.get("span[class='menu-title']:nth-child(2)").eq(1).click(); 
      cy.get('.ng-tns-c7-5 > .menu-title').click(); 
      cy.get('.sidebar-toggle').click();
      cy.screenshot('SC-1 - 02_Forms_Section_Clicked'); // Screenshot after navigating to Forms

      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > nb-card-body > form > :nth-child(4) > .offset-sm-3 > .appearance-filled')
        .should('be.visible')
        .invoke('attr', 'data-cy', 'signInButton')
        .should('have.attr', 'data-cy', 'signInButton');
      cy.screenshot('SC-1 - 03_SignIn_Button_Checked'); // Screenshot after Sign In button validation

      cy.get('#inputEmail3').type("USERNAME@123"); 
      cy.get('#inputPassword3').type("PASSWORD"); 
      cy.get('.checkbox > nb-checkbox > .label > .custom-checkbox').click(); 
      cy.screenshot('SC-1 - 04_Form_Filled'); // Screenshot after filling the form

      cy.get('.form-horizontal > :nth-child(4) > .offset-sm-3 > .appearance-filled').click();
      cy.screenshot('SC-1 - 05_SignIn_Clicked'); // Screenshot after clicking Sign In button
  });
});
