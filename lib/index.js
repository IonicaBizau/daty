"use strict";

const formatoid = require("formatoid")
    , addSubtractDate = require("add-subtract-date")
    , diffDates = require("diff-dates")
    , classMethods = require("class-methods")
    ;

class Daty {

    constructor (year, month, day, hours, minutes, seconds, milliseconds) {
        switch (arguments.length) {
            case 0:
                this._ = new Date();
                break;
            case 1:
                this._ = new Date(year);
                break;
            case 2:
                this._ = new Date(year, month);
                break;
            case 3:
                this._ = new Date(year, month, day);
                break;
            case 4:
                this._ = new Date(year, month, day, hours);
                break;
            case 5:
                this._ = new Date(year, month, day, hours, minutes);
                break;
            case 6:
                this._ = new Date(year, month, day, hours, minutes, seconds);
                break;
            case 7:
                this._ = new Date(year, month, day, hours, minutes, seconds, milliseconds);
                break;
        }
    }

    /**
     * format
     * Formats the date by specifying the format.
     *
     * @name format
     * @function
     * @param {String} s The date format using the [`formatoid`](https://github.com/IonicaBizau/formatoid) supported fields or the presets:
     *
     *  - `L` : `M/D/YYYY`
     *  - `LL`: `MMMM D, YYYY`
     *  - `LLL`: `MMMM D, YYYY hh:mm A`
     *  - `LLLL`: `dddd, MMMM D, YYYY h:m A`
     *
     * If not specified, the date object will be stringified using the native `toString()` method.
     *
     * @return {String} The formated date.
     */
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

    /**
     * fromNow
     * Returns the "from now" value which is human readable.
     *
     * @name fromNow
     * @function
     * @returns {String} The human readable "from now" value.
     */
    fromNow () {
        const diffMs = this - new Date()
        const seconds = Math.abs(Math.floor(diffMs / 1000))
        const intervals = [
            ["years", 31536000]
          , ["months", 2592000]
          , ["days", 86400]
          , ["hours", 3600]
          , ["minutes", 60]
          , ["seconds", 1]
        ]

        let str = ""

        for (let i = 0; i < intervals.length; ++i) {
            const count = Math.floor(seconds / intervals[i][1])
            if (count >= 1) {
                let unit = intervals[i][0]
                if (count === 1) {
                    unit = unit.slice(0, -1)
                }
                return `${diffMs > 0 ? "in " : ""}${count === 1 ? "one" : count} ${unit}${diffMs < 0 ? " ago" : ""}`
            }
        }

        return "now";
    }

    /**
     * add
     * Adds a specified number of units to the date.
     *
     * @name add
     * @function
     * @param {String} count The number of units to subtract.
     * @param {String} what One of the units supported by [`add-subtract-date`](https://github.com/IonicaBizau/add-subtract-date).
     * @return {Daty} The `Daty` instance.
     */
    add (count, what) {
        return addSubtractDate.add(this, count, what);
    }

    /**
     * subtract
     * Subtracts a specified number of units to the date.
     *
     * @name subtract
     * @function
     * @param {String} count The number of units to subtract.
     * @param {String} what One of the units supported by [`add-subtract-date`](https://github.com/IonicaBizau/add-subtract-date).
     * @return {Daty} The `Daty` instance.
     */
    subtract (count, what) {
        return addSubtractDate.subtract(this, count, what);
    }

    /**
     * clone
     * Clones the `Daty` instance.
     *
     * @name clone
     * @function
     * @return {Daty} A new `Daty` instance that is cloned from the first one.
     */
    clone () {
        var c = new Daty();
        c.setTime(this.getTime());
        return c;
    }

    /**
     * diff
     * Makes the difference between the current instance and a specified `Daty` instance.
     *
     * @name diff
     * @function
     * @param {Daty|Date} d The date object.
     * @param {String} units One of the units supported by [`diff-dates`](https://github.com/IonicaBizau/diff-dates)
     * @return {Number} The difference result (in units).
     */
    diff (d, units) {
        return diffDates(this, d, units);
    }

    /**
     * isEqual
     * Checks if the date instance is equal to another date object.
     *
     * @name isEqual
     * @function
     * @param {Daty|Date} d The date object.
     * @return {Boolean} `true` if they are equal, `false` otherwise.
     */
    isEqual (d) {
        return !this.diff(d);
    }

    /**
     * isBefore
     * Checks if the date instance is before to another date object.
     *
     * @name isBefore
     * @function
     * @param {Daty|Date} d The date object.
     * @return {Boolean} `true` if the date object is before the specified date or `false` otherwise.
     */
    isBefore (d) {
        return this.diff(d) < 0;
    }

    /**
     * isAfter
     * Checks if the date instance is after another date object.
     *
     * @name isAfter
     * @function
     * @param {Daty|Date} d The date object.
     * @return {Boolean} `true` if the date object is after the specified date or `false` otherwise.
     */
    isAfter (d) {
        return this.diff(d) > 0;
    }

    /**
     * isValid
     * Checks if the date instance is valid.
     *
     * @name isAfter
     * @function
     * @return {Boolean} `true` if the date object is valid, `false` otherwise.
     */
    isValid () {
        return !isNaN(this);
    }

    /**
     * utc
     * Useful to format the date in UTC.
     *
     * @name utc
     * @function
     * @returns {Daty} A new `Daty` instance which will be formatted in UTC output.
     */
    utc () {
        const clone = this.clone();
        clone._useUTC = true;
        return clone;
    }
}

classMethods(Date).forEach(meth => {
    Daty.prototype[meth] = meth.startsWith("set") ? function () {
        this._[meth].apply(this._, arguments);
        return this;
    } : function () {
        return this._[meth].apply(this._, arguments);
    };
});


module.exports = Daty;
