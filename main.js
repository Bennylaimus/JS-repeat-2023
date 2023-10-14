// forEach
// map
// filter
// concat
// find
// findIndex
// indexOf
// lastIndexOf
// some
// every
// includes
// push
// unshift
// pop
// shift
// toString
// join
// fill
// copyWithin
// slice
// splice
// sort
// reverse
// from
// isArray
// valueOf
// entries
// keys
// values
// reduce
// reduceRight
// flat
// flatMap

// ==========================

let food = ['Cucumber', 'Potato', 'Carrot', 'Orange', 'Kiwi', 'Potato', 'Apple', 'Melon'];

const numbers = [1, 2, 3, 5, 80, 90, 33, 35];

const multiDemArr = [1, 2, 3, [4, 5, [6, [7]]]];

let flatted = multiDemArr.flatMap((element) => {
    return element[0] + element[0]
});

console.log(flatted);


// https://www.youtube.com/watch?v=RVxuGCWZ_8E&t=171s
