function foo(x, y){ // traditional function
    return "Hello World from foo";
}

const Afoo = (x, y) => { // arrow function
    return "Hello World from Afoo"
}

//console.log(foo())
//console.log(Afoo())
function square(x){
    return x * x;
}

const Asquare = x => x * x

console.log(square(2))
console.log(Asquare(2))

const arr = [2,3,5,3,2,5]
arr.forEach(function(items){
    //console.log(items)
})
console.log("--")
arr.forEach(items => console.log(items))
