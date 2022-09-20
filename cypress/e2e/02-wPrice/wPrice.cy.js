/// <reference types="cypress" />
import { loginPage } from "../../pageObject/loginPage";
import { externalPrice } from "../../pageObject/externalPrice";
import { wPrice } from "../../pageObject/wPrice";

describe('Kiểm tra menu Giá dầu thế giới', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
        loginPage
        .typeUsername('super')
        .typePassword('Idtek@04HR')
        .clickLogin();
        externalPrice 
        .clickSubMenu()
        .shouldShowSideMenu1()   
    })
    it('Check mã giá dầu', () => {
        wPrice
        .checkFunction()      
    })
})
