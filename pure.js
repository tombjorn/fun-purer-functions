
// removeLastNumber([1, 2, 3, 4]);
/* should return 
[1,2,3]
*/

function removeLastNumber(arr){
const result = [...arr];
result.pop();
return result;
}

function raiseSalaries(arr, percent){
    const copy = [...arr]
    const result = copy.map((person) => {
        const p = {...person};
        p.salary += p.salary/100 * percent
        Math.round(p.salary);
        return p;

    })
    return result;
}
const person =   { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }

function updateTasks(){
    const obj = {};
    for (let key in arguments[0]) {
        console.log(key)
        obj[key] = arguments[0][key];
      }
    
    for (let i = 1; i < arguments.length; i++){
        const task = arguments[i].slice();
        obj.tasks.push(task);

    }
    return obj;
}

function cloneObject (){

}
    
    
module.exports = cloneObject;