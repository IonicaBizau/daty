"use strict";

const dateFormat = require("format-date")
    , addSubtractDate = require("add-subtract-date")
    ;

class Daty extends Date {
    format (s) {
        if (!s) { return this.toString(); }
        switch (s) {
            case "L":
                return this.format("M/D/YYYY");
            case "LL":
                return this.format("MMMM D, YYYY");
            case "LLL":
                return this.format("MMMM D, YYYY hh:mm A");
            case "LLL":
                return this.format("MMMM D, YYYY hh:mm A");
            case "LLLL":
                return this.format("dddd, MMMM D, YYYY h:m A");
        }
        return dateFormat(this, s);
    }
    add (count, what) {
        return addSubtractDate.add(this, count, what);
    }
    subtract (count, what) {
        return addSubtractDate.subtract(this, count, what);
    }
    clone () {
        var c = new Daty();
        c.setTime(this.getTime());
        return c;
    }
    diff (d, units) {
        if (!units) {
            return this - d;
        }
        return this.format(units) - d.format(units);
    }
}

module.exports = Daty;
