angular.module('customer').controller('customer-controller', [
    'customer-formatting-service',
    function(customerFormattingService){
        this.productName = 'Food';
        this.getSalesDate = function(){
          return new Date();
        };
        this.printSalesReport = function(customerId){
            var customerInfo = customerFormattingService.getFormattedCustomerInfo(customerId);
            return this.productName + ' ' + customerInfo + ' ' + this.getSalesDate().toDateString();
        };
    }
]);