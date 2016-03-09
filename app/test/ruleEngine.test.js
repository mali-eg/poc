describe("Unit: Testing Services", function () {
    describe("Builder Service:", function () {

        beforeEach(module('myApp'));

        it('should contain a Builder Service',
            inject(function (modelBuilder) {
                var result=modelBuilder.getAddOns();
                console.log(result.addons.promotions);
                expect(result.addons.promotions.length).toBeGreaterThan(0);
            }));
    });
});