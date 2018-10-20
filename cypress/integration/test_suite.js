import { container, header, filter, column } from "../selectors";

describe('Suite #1', () => {

    beforeEach(() => cy.visit('localhost:3000'))
    
        it('Lloyd card can switch columns from Applied to Hired', () => {
            cy.get(column.applied).find(container.member('lloyd')).should('exist');
            cy.get(container.buttonUp('lloyd')).click();
            cy.get(column.interviewing).find(container.member('lloyd')).should('exist');
            cy.get(container.buttonDown('lloyd')).should('be.visible');

            cy.get(container.buttonUp('lloyd')).click();
            cy.get(column.hired).find(container.member('lloyd')).should('exist');
            cy.get(container.buttonUp('lloyd')).should('not.be.visible');
        })

        it('Julia card can switch columns from Hired to Applied', () => {
            cy.get(column.hired).find(container.member('julia')).should('exist');
            cy.get(container.buttonDown('julia')).click();
            cy.get(column.interviewing).find(container.member('julia')).should('exist');
            cy.get(container.buttonUp('julia')).should('be.visible');

            cy.get(container.buttonDown('julia')).click();
            cy.get(column.applied).find(container.member('julia')).should('exist');
            cy.get(container.buttonDown('julia')).should('not.exist');

        })

        it ('Bad name + Bad city = 0 results', () => {
            cy.get(filter.name).type('chtototam');
            cy.get(filter.city).type('gdetotam');
            cy.get(filter.submitButton).click();
            cy.get(container.member()).should('have.length', 0);
        })

        it ('Good 1 name = 1 result', () => {
            cy.get(filter.name).type('lloyd');
            cy.get(filter.submitButton).click();
            cy.get(container.member('lloyd')).should('have.length', 1);
        })

        it ('Good 1 city = 1 result', () => {
            cy.get(filter.city).type('cardiff');
            cy.get(filter.submitButton).click();
            cy.get(container.member('danielle')).should('have.length', 1)
        })

        it ('Good name + Good city = 1 result', () => {
            cy.get(filter.name).type('julia');
            cy.get(filter.city).type('sheffield');
            cy.get(filter.submitButton).click();
            cy.get(container.member('julia')).should('have.length', 1);
        })

        it ('Bad 1 name = 0 result', () => {
            cy.get(filter.name).type('kakaya-toDich');
            cy.get(filter.submitButton).click();
            cy.get(container.member()).should('have.length', 0);
        })

        it ('Bad 1 city = 0 result', () => {
            cy.get(filter.city).type('kakaya-toDich');
            cy.get(filter.submitButton).click();
            cy.get(container.member()).should('have.length', 0);
        })

        it ('Clear button function', () => {
            cy.get(filter.name).type('chtototam');
            cy.get(filter.city).type('gdetotam');
            cy.get(filter.submitButton).click();
            cy.get(container.member()).should('have.length', 0);
            cy.get(filter.clearButton).click();
            cy.get(container.member()).should('have.length', 5);
        })
    })