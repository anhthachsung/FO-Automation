export const loginPage ={

    typeUsername(user) {
        cy.get(':nth-child(2) > input').type(user);
        return this;
    },

    typePassword(password) {
        cy.get(':nth-child(3) > input').type(password);
        return this;
    },

    clickLogin(){
        cy.get('.login-button').click();
        return this;
    },

    shouldShowLoginError(){
        cy.get('.ant-notification-notice').then( noti => {
            const errorNoti = noti.text();
            expect(errorNoti).to.contain('Đăng nhập thất bại');
        })

        return this;
    }
}