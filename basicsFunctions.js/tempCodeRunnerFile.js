// // function func(a,b,fn){
// //     return fn(a,b);
// // }
// // function sum(a,b){
// //     return a+b;
// // }
// // let ans = func(10,20,sum);
// // console.log(ans);
// // // function funct(){
// // //     console.log("hello");
// // // }
// // // setInterval(funct,1*1000);

// console.log(str.slice(4,5));
// console.log(str.substr(4,5));
// let str = "sumitkumar";
// console.log(str.slice(1,2));


// function callbacks
//step1: calling one function inside another function 

function square(num){
    return num*num;
}

function cube(num){
    return num*num*num;
}



function sumOfSquares(a,b){
    return square(a)+square(b);
}

function sumOfCubes(a,b){
    return cube(a)+cube(b);
}

console.log(sumOfSquares(2,3));
console.log(sumOfCubes(1,1));

//Now the main use of callback function is to pass a function as an argument to another function. This allows for more flexible and reusable code, as the behaviour of the function can be customized by passing different callback functions. It also allows for asynchronous programming, where a function can be executed after a certain event or condition is met, without blocking the execution of other code.

function square(num){
    return num*num;
}

function cube(num){
    return num*num*num;
}

function anyOperation(a,b,fn){
    return fn(a)+fn(b);
}
 console.log(anyOperation(2,3,square));
 console.log(anyOperation(1,1,cube));
