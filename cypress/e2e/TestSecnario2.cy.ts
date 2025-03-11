///<reference types='cypress'/>

describe('Assignment project - Scenario 2', () => { 
  it('Detailed scenario 2 - Interact with Radio Buttons', () => { 
      // Start from base URL
      cy.visit('http://localhost:4200');
      cy.screenshot('Sc-2 - 01-Home-Page-Loaded');

      // Navigate to Forms -> Layouts
      cy.get('.sidebar-toggle').click(); 
      cy.get("span[class='menu-title']:nth-child(2)").eq(1).click(); 
      cy.get('.ng-tns-c7-5 > .menu-title').click(); 
      cy.get('.sidebar-toggle').click();
      cy.screenshot('Sc-2 - 02-Navigated-To-Forms-Layouts');

      // Locate all visible radio buttons under the form layout
      cy.get("input[class='native-input visually-hidden']:visible").eq(1).then(($radiobtn) => { 
          if ($radiobtn.prop('checked')) { 
              cy.log('Radio button is enabled'); 
          } else { 
              cy.log('Radio button is disabled'); 
          } 
      });

      cy.get("input[class='native-input visually-hidden']:visible").eq(1).click({ force: true });
      cy.screenshot('Sc-2 - 03-First-Radio-Button-Clicked');

      cy.get("input[class='native-input visually-hidden']:visible").eq(2).then(($radiobtn) => { 
          if ($radiobtn.prop('checked')) { 
              cy.log('Radio button is enabled'); 
          } else { 
              cy.log('Radio button is disabled'); 
          } 
      });

      cy.get("input[class='native-input visually-hidden']:visible").eq(2).click({ force: true });
      cy.screenshot('Sc-2 - 04-Second-Radio-Button-Clicked');

      // ✅ Verify First Radio Button is No Longer Selected
      cy.get("input[class='native-input visually-hidden']:visible").eq(1).should('not.be.checked');
      cy.screenshot('Sc-2 - 05-First-Radio-Button-Unchecked');

      // ✅ Verify Third Radio Button is Disabled
      cy.get("input[class='native-input visually-hidden']:visible").eq(3).should('be.disabled');
      cy.screenshot('Sc-2 - 06-Third-Radio-Button-Disabled');
  });
});
