describe('Assignment project - Scenario 3', () => {
  it('Detailed scenario 3 - Interact with Modal & Overlays', () => { 
    // Start from base URL
    cy.visit('http://localhost:4200');
    cy.screenshot('01-Home-Page-Loaded');

    // Navigate to Modal & Overlays
    cy.contains("Modal & Overlays").click();
    cy.get('.ng-tns-c7-11 > .menu-title').click();
    cy.screenshot('02-Navigated-To-Modal-Overlays');

    // Inspect & Click Toaster
    cy.contains("Toastr").click();
    cy.screenshot('03-Toaster-Clicked');

    // Select all three checkboxes using check()
    cy.get(".custom-checkbox").each(($el) => {
      cy.wrap($el).click({ force: true }); 
    });
    cy.screenshot('04-All-Checkboxes-Checked');

    // Click ONLY the second checkbox using click()
    cy.get(".custom-checkbox").eq(1).click({ force: true });
    cy.screenshot('05-Second-Checkbox-Clicked');

  });
});
