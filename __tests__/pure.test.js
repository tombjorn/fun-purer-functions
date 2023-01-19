const removeLastNumber = require('../pure.js')
const raiseSalaries = require('../pure.js');
const updateTasks = require('../pure.js');
const cloneObject = require('../pure.js');
const input = [1, 2, 3, 4];
const copy = [...input]
describe('removes last number from array', () => {
    test.skip('original array is not changed',() => {
        expect(removeLastNumber(input)).not.toEqual(copy);
    })
    test.skip('length returned is 1 less', () => {
        const output = removeLastNumber(input)
        expect(output.length).toBe(input.length - 1)
    })
    test.skip('removes last number from array', () => {
        expect(removeLastNumber(input)).toEqual([1, 2, 3]);
    })
})
// const employees = 
// [ 
//     {name:'john', salary: 20000}, 
//     {name:'sarah', salary: 30000},
//     {name:'amy', salary: 50000},
//     {name:'jesus', salary: 1000}
// ];
// const percentage = 10;

// const output = 
// [
//     {name:'john', salary: 22000}, 
//     {name:'sarah', salary: 33000},
//     {name:'amy', salary: 55000},
//     {name:'jesus', salary: 1100}
// ]
// const input1 =   [
//     { name: "Alice", salary: 3000 },
//     { name: "Bob", salary: 2000 },
//     { name: "Vel", salary: 4500 },
//   ];
// const output1 = 
// [{ name: 'Alice', salary: 3300 },
//  { name: 'Bob', salary: 2200 }, 
//  { name: 'Vel', salary: 4950 }
// ]
describe('changing salaries by percent', () => {
    test.skip('returns differnt array', () => {
        const output = raiseSalaries(employees, percentage);
        expect(output).not.toBe(employees)
    })
    test.skip('salaries are changed by percent', () => {
        expect(raiseSalaries(employees, 10)).toEqual(output)
        expect(raiseSalaries(input1, 10)).toEqual(output1)
    })
})
//works if new person is declared each test,
//but despite copying the object, the arguments
//are still being added to the 'global' person object?
describe('adding new tasks to person', () => {
    test('return different object', () => {
        const person =   { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        const output = updateTasks(person);
        expect(person).not.toBe(output);
    })
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
    test('adds one task to object', () => {
        // const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        expect(updateTasks(person,'reading')).toEqual({ name: "Anat", tasks: ["feed Schnitzel", "Go to pottery", "reading"] })
    })
    test('adds one task to object', () => {
        expect(updateTasks(person,'yugiyoh', 'panic attacks')).toEqual({ name: "Anat", tasks: ["feed Schnitzel", "Go to pottery", 'yugiyoh', 'panic attacks'] })
        console.log(person);
    })
})

describe('clone source object into target object', () => {
    test.todo('from two objects return target')
    test.todo('source object is not changed')
    test.todo('target object contains source data')
})