export const internalPrice = {
  
    // Chọn sub menu thông tin giá
    clickSubMenu(){
        cy.get('.sub-menu-text').contains("Thông tin giá").click();
        return this;
    },

    // Kiểm tra side menu trong submenu Thông tin giá
    shouldShowSideMenu2(){
        cy.contains("Giá xăng dầu trong nước").click();
        return this;
    },

    // Search tên or mã sản phẩm
    searchProduct(){
        cy.get('[data-testid="form--objectid-field-content"]');
        cy.wait(3000)

        return this;
    },

    // Chọn sản phẩm đầu tiên trên danh sách
    clickProduct1(){
        cy.get('[data-testid="grid--action-row-0-detail"]').click();
        
        return this;
    },

    // Chọn button Tạo mới
    clickNew(){
        cy.get('[type="button"][tooltip="Tạo mới dòng"]').click();
        
        return this;
    },

    // Kiểm tra bộ filter và buttons
    checkFunctions(){
        cy.contains('[data-testid="form--objectid-field"]','Lọc dữ liệu').should('exist');
        cy.get('[data-testid="form--all-field-content"]').should('exist');
        cy.get('[type="button"][tooltip="Tạo mới dòng"]').should('exist');
        cy.get('[type="button"][tooltip="Import dữ liệu"]').should('exist');
        cy.get('[type="button"][tooltip="Xuất Excel"]').should('exist');
        cy.get('[type="button"][tooltip="Làm mới"]').should('exist');
        cy.get('[type="button"][tooltip="Trở về"]').should('exist');
        cy.get('[type="button"][tooltip="Lịch sử chỉnh sửa"]').should('not.exist');
        cy.get('[type="button"][tooltip="Gửi email báo giá"]').should('not.exist');
        cy.get('[type="button"][tooltip="Ghi chú"]').should('not.exist');

        return this;
    },


    // Chọn Gửi mail
    clickSendMail(){
        cy.get('[type="button"][tooltip="Gửi email báo giá"]').click();
        cy.contains('.wrap-form','Gửi').should('exist');

        return this;
    },

    // Chọn lịch sử chỉnh sửa
    clickHistory(){
        cy.get('[type="button"][tooltip="Lịch sử chỉnh sửa"]').click();
        cy.contains('.rc-dialog-content','INVALID DATE').should('not.exist');

        return this;
    },


    clickSync(){
        cy.get('[type="button"][tooltip="Làm mới"]').click();

        return this;
    },
}