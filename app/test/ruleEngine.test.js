describe("Unit: Testing Services", function() {
    describe("Builder Service:", function() {

        beforeEach(module('myApp'));

        it('should contain a Builder Service',
            inject(function(modelBuilder) {
                expect(modelBuilder).not.to.equal(null);
            }));

    });
});