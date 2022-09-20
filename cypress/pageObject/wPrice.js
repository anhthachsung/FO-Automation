export const wPrice = {

    // Check filter Tìm kiếm
    clickDayFilter(){
        cy.contains('[data-testid="form--searchkey-field-content"]').click();
        
        return this;
    },
        
    // Check mã các giá dầu
    checkFunction(){
        cy.contains('[col-id="code"]', 'GPR-WTI-CLC1').should('exist'); // find the name
        cy.contains('[col-id="code"]', 'GPR-WTI').should('exist');      // find the name
        cy.contains('[col-id="code"]', 'GPR-LCOC1').should('exist');    // find the name
        cy.contains('[col-id="code"]', 'GPR-NAPTHA').should('exist');   // find the name
        cy.contains('[col-id="code"]', 'GPR-CP').should('exist');       // find the name
        cy.contains('[col-id="code"]', 'GPR-FO').should('exist');       // find the name
        cy.contains('[col-id="code"]', 'GPR-GAS97').should('exist');    // find the name
        cy.contains('[col-id="code"]', 'GPR-GAS95').should('exist');    // find the name
        cy.contains('[col-id="code"]', 'GPR-GAS92').should('exist');    // find the name
        cy.contains('[col-id="code"]', 'GPR-GAS92').should('exist');    // find the name
        
        return this;
    }
    
}