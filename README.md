













![daty](http://i.imgur.com/E2GKGYK.png)




# daty

A tiny library to manage date objects.




## Installation

```sh
$ npm i daty
```









## Example






```js
const Daty = require("daty");

// You can initialize Daty using the date parameters
const d = new Daty(2015, 11, 16, 18, 42);

// ...but you have friendly date formatting
console.log(d.format("LL"));
// => December 16, 2015

console.log(d.format("LLLL"));
// => Wednesday, December 16, 2015 6:42 PM

console.log(d.utc().format("LLLL"));
// => Wednesday, December 16, 2015 4:42 PM

// Go back in the history, when the Romanian revolution started in 1989
// We will clone the current date since we will need it later.
// Also, subtract 26 years.
const revolutionDate = d.clone().subtract(26, "years");
console.log(revolutionDate.format("LLL"));
// => December 16, 1989 12:00 AM

// Make a difference in years
const difference = new Daty().diff(revolutionDate, "years");

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

### `fromNow()`
Returns the "from now" value which is human readable.

#### Return
- **String** The human readable "from now" value.

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

### `utc()`
Useful to format the date in UTC.

#### Return
- **Daty** A new `Daty` instance which will be formatted in UTC output.






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
