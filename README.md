[![daty](http://i.imgur.com/E2GKGYK.png)](#)

# daty [![Support this project][donate-now]][paypal-donations]

A tiny library to manage date objects.

## Installation

```sh
$ npm i --save daty
```

## Example

```js
const Daty = require("daty");

// You can initialize Daty using the date parameters
var d = new Daty(2015, 11, 16);

// ...but you have friendly date formatting
console.log(d.format("LL"));
// => December 16, 2015

// Go back in the history, when the Romanian revolution started in 1989
// We will clone the current date since we will need it later.
// Also, subtract 26 years.
var revolutionDate = d.clone().subtract(26, "years");
console.log(revolutionDate.format("LLL"));
// => December 16, 1989 12:00 AM

// Make a difference in years
var difference = new Daty().diff(revolutionDate, "years");

console.log(`Right now there are ${difference} years since the Romanian revolution, 1989.`);
// => Right now there are 26 years since the Romanian revolution, 1989.
```

## Documentation

### `format(s)`
Formats the date by specifying the format.

#### Params
- **String** `s`: The date format using the [`formatoid`](https://github.com/IonicaBizau/formatoid) supported fields or the presets:
 - `L` : `M/D/YYYY`
 - `LL`: `MMMM D, YYYY`
 - `LLL`: `MMMM D, YYYY hh:mm A`
 - `LLLL`: `dddd, MMMM D, YYYY h:m A`

If not specified, the date object will be stringified using the native `toString()` method.

#### Return
- **String** The formated date.

### `add(count, what)`
Adds a specified number of units to the date.

#### Params
- **String** `count`: The number of units to subtract.
- **String** `what`: One of the units supported by [`add-subtract-date`](https://github.com/IonicaBizau/add-subtract-date).

#### Return
- **Daty** The `Daty` instance.

### `subtract(count, what)`
Subtracts a specified number of units to the date.

#### Params
- **String** `count`: The number of units to subtract.
- **String** `what`: One of the units supported by [`add-subtract-date`](https://github.com/IonicaBizau/add-subtract-date).

#### Return
- **Daty** The `Daty` instance.

### `clone()`
Clones the `Daty` instance.

#### Return
- **Daty** A new `Daty` instance that is cloned from the first one.

### `diff(d, units)`
Makes the difference between the current instance and a specified `Daty` instance.

#### Params
- **Daty|Date** `d`: The date object.
- **String** `units`: One of the units supported by [`diff-dates`](https://github.com/IonicaBizau/diff-dates)

#### Return
- **Number** The difference result (in units).

### `isEqual(d)`
Checks if the date instance is equal to another date object.

#### Params
- **Daty|Date** `d`: The date object.

#### Return
- **Boolean** `true` if they are equal, `false` otherwise.

### `isBefore(d)`
Checks if the date instance is before to another date object.

#### Params
- **Daty|Date** `d`: The date object.

#### Return
- **Boolean** `true` if the date object is before the specified date or `false` otherwise.

### `isAfter(d)`
Checks if the date instance is after another date object.

#### Params
- **Daty|Date** `d`: The date object.

#### Return
- **Boolean** `true` if the date object is after the specified date or `false` otherwise.

### `isAfter()`
isValid
Checks if the date instance is valid.

#### Return
- **Boolean** `true` if the date object is valid, `false` otherwise.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md