describe('customer-controller', function(){
    var $controller;
    var customerService;
    beforeEach(function(){
        module('customer');
        inject( function($injector){
            customerService = $injector.get('customer-service');
            $controller = $injector.get('$controller');
        });
    });
    it('should print sales report', function(){
        spyOn(customerService,'getCustomerById').and.returnValue({firstName:'Joe', lastName:'Smith',totalSales:50});
        var ctrl = $controller('customer-controller');

        //Override controller functions
        ctrl.productName = 'Snacks';
        ctrl.getSalesDate = function(){return new Date(2000,1,1);};

        var report = ctrl.printSalesReport(1);
        expect(report).toBe('Snacks Joe Smith Total Sales: $50 Tue Feb 01 2000');
    });
});