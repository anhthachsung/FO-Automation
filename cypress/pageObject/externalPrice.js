export const externalPrice = {
  
    // Chọn sub menu thông tin giá
    clickSubMenu(){
        cy.get('.sub-menu-text').contains("Thông tin giá").click();
        return this;
    },

    // Kiểm tra side menu trong submenu Thông tin giá
    shouldShowSideMenu1(){
        cy.contains("Giá dầu thế giới").click();
        return this;
    },

    // Search tên or mã sản phẩm
    searchProduct(){
        cy.get('[data-testid="form--searchkey-field-content"]');
        cy.wait(3000)

        return this;
    },

    // Chọn sản phẩm đầu tiên trên danh sách
    clickProduct1(){
        cy.get('[data-testid="grid--action-row-0-detail"]').click();
        return this;
    },

    // Kiểm tra bộ filter và buttons
    checkFunctions(){
        cy.contains('[data-testid="form--objectid-field"]','Lọc dữ liệu').should('exist');
        cy.get('[data-testid="form--datetype-field-content"]').should('exist');
        cy.contains('[data-testid="form--allname-field"]','All').should('exist');
        cy.get('[data-testid="form--all-field-content"]').should('exist');
        cy.get('[type="button"][tooltip="Import"]').should('exist');
        cy.get('[type="button"][tooltip="Xuất Excel"]').should('exist');
        cy.get('[type="button"][tooltip="Làm mới"]').should('exist');
        cy.get('[type="button"][tooltip="Trở về"]').should('exist');
        cy.get('[type="button"][tooltip="Lịch sử chỉnh sửa"]').should('not.exist');
        cy.get('[type="button"][tooltip="Gửi email báo giá"]').should('not.exist');
        cy.get('[type="button"][tooltip="Ghi chú"]').should('not.exist');

        return this;
    },

    // Chọn filter ngày
    clickDayFilter(){
        cy.contains('.radio-type-material','Day').click();
        
        return this;
    },

    // Chọn filter tháng
    clickMonthFilter(){
        cy.contains('.radio-type-material','Month').click();
        
        return this;
    },

    // Chọn filter năm
    clickYearFilter(){
        cy.contains('.radio-type-material','Year').click();
        
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

    // Chọn filter tháng
    clickTimeFilter(month){
        cy.get('.ant-picker-input > input').click();
        cy.contains('month').click();
        
        return this;
    },

    clickCell(){
        cy.get('[role="gridcell"]').eq(1).click();

        return this;
    },

    clickSync(){
        cy.get('[type="button"][tooltip="Làm mới"]').click();

        return this;
    },

    // Chọn trường cập nhật theo Mã param
    updatePrice(){
        cy.get('[col-id="GPR-BRENT-001"]').eq(11).click().type("12312");
        cy.get('[col-id="GPR-BRENT-001"]').eq(12).click();
        cy.contains("Cập nhật").click();
        cy.contains("Đồng ý").click();

        return this;
    },
}