export {};

// Argument of type not assignable to parameter type 'never'

// EXAMPLE 1 - Explicitly type the array to solve the error

const arr: number[] = [];

arr.push(100);
console.log(arr); // 👉️ [100]

// // ---------------------------------------

// type MyType = {
//   arr: string[];
// };

// const obj: MyType = {
//   arr: [],
// };

// obj.arr.push('one');

// // 👇️ {arr: ['one']}
// console.log(obj);

// ---------------------------------------------------

// // EXAMPLE 2

// const arr: any[] = [];

// arr.push(100);
// arr.push('hello');
// arr.push({ name: 'James' });

// // 👇️ [100, 'hello', {name: 'James'}]
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 3 - Typing an array of objects

// const arr: { id: number; name: string }[] = [];

// arr.push({ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' });

// // 👇️ [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]
// console.log(arr);

// ---------------------------------------------------

// // An empty array is inferred to have a type of `never[]`

// // EXAMPLE 4 - Explicitly type the array to solve the error

// const arr: string[] = [];

// arr[0] = 'a';

// console.log(arr); // 👉️ ['a']
