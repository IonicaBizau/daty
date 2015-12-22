const tester = require("tester")
    , Daty = require("../lib")
    ;

tester.describe("daty", test => {
    test.should("format correctly the dates", () => {
        var d = new Daty(2015, 11, 16);
        test.expect(d.format("LL")).toBe("December 16, 2015");
        test.expect(d.format("LLL")).toBe("December 16, 2015 12:00 AM");
    });
    test.should("clone dates", () => {
        var d = new Daty(2015, 11, 16)
          , c = d.clone()
          ;

        test.expect(d).toNotBe(c);
        test.expect(d.getTime()).toBe(c.getTime());
    });
    test.should("add years", () => {
        var d = new Daty(2015, 11, 16)
        d.add(2, "years");
        test.expect(d.getFullYear()).toBe(2017);
    });
    test.should("subtract years", () => {
        var d = new Daty(2015, 11, 16)
        d.subtract(26, "years");
        test.expect(d.getFullYear()).toBe(1989);
    });
    test.should("diff units", () => {
        var d = new Daty(2015, 11, 16)
          , c = new Daty(1989, 11, 16)
          ;

        test.expect(d.diff(c, "years")).toBe(26);
    });
    test.should("check if two dates are equal", () => {
        var d = new Daty(2015, 11, 16)
          , c = new Daty(2015, 11, 16)
          , cc = c.clone()
          ;

        test.expect(d.isEqual(c)).toBe(true);
        test.expect(d.isEqual(cc)).toBe(true);
        test.expect(c.isEqual(cc)).toBe(true);
    });
    test.should("check before/after dates", () => {
        var d = new Daty(2015, 11, 16)
          , b = new Daty(2015, 11, 15)
          , a = new Daty(2015, 11, 17)
          ;

        test.expect(d.isAfter(b)).toBe(true);
        test.expect(d.isBefore(a)).toBe(true);
        test.expect(b.isBefore(d)).toBe(true);
        test.expect(b.isBefore(a)).toBe(true);
        test.expect(a.isAfter(d)).toBe(true);
        test.expect(a.isAfter(b)).toBe(true);
    });
    test.should("test against invalid dates", () => {
        var d = new Daty("foo");
        test.expect(d.isValid()).toBe(false);
    });
});
