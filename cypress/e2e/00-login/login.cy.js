/// <reference types="cypress" />
import { loginPage } from "../../pageObject/loginPage";
import { externalPrice} from "../../pageObject/externalPrice";


describe('Login', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('url'));
    });
  
    //Login thành công và chuyển hướng đến trang chủ
    it('Should redirect to dashboard page when login successfully', () => {
      loginPage
        //lấy username và password từ file cypress.env.json
        .typeUsername('super')
        .typePassword('Idtek@04HR1')
        .clickLogin()
        .shouldShowLoginError();
    });
  });  