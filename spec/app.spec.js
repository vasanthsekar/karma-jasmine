describe("Unit: Testing Services", function() {
    describe("Search Service:", function() {

        beforeEach(function() {
            angular.module('app');
        });

        it('should contain a searchService',
           inject(function(searchService) {
                expect(searchService).not.to.equal(null);
        }));

        it('should contain two search options',
            inject(function(searchService) {
                expect(searchService.getSearchOptions()).to.equal(2);
        }));

   });
});