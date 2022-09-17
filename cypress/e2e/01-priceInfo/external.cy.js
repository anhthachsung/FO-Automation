/// <reference types="cypress" />
import { loginPage } from "../../pageObject/loginPage";
import { externalPrice } from "../../pageObject/externalPrice";

describe('Kiểm tra menu Giá dầu thế giới', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
        loginPage
        .typeUsername('super')
        .typePassword('Idtek@04HR')
        .clickLogin();
    })

    it('Update product price', () =>{
        externalPrice
        .clickSubMenu()
        .shouldShowSideMenu1()
        .clickProduct1()
        .checkFunctions()
        .updatePrice()
    })

    it('https://portal.idtek.com.vn/youtrack/issue/FO-150',() =>{
        externalPrice 
        .clickSubMenu()
        .shouldShowSideMenu1()
        .clickProduct1()
        .checkFunctions()
        .clickCell()
        .clickHistory()
    })
    it('https://portal.idtek.com.vn/youtrack/issue/FO-195', () => {
        externalPrice 
        .clickSubMenu()
        .shouldShowSideMenu1()
        .clickProduct1()
        .checkFunctions()
        .clickCell()
        .clickSync()
    })

})