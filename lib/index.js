"use strict";

const formatoid = require("formatoid")
    , addSubtractDate = require("add-subtract-date")
    , diffDates = require("diff-dates")
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
        return formatoid(this, s);
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
        return diffDates(this, d, units);
    }
    isEqual (d) {
        return !this.diff(d);
    }
    isBefore (d) {
        return this.diff(d) < 0;
    }
    isAfter (d) {
        return this.diff(d) > 0;
    }
    isValid () {
        return !isNaN(this);
    }
}

module.exports = Daty;
