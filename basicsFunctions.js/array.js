// //Manupulation of array  
// arr.push(item);         // Adds an item to the end of the array
// arr.pop();               // Removes the last item from the array
// arr.shift();               // Removes the first item from the array
// arr.unshift(item);        // Adds an item to the beginning of the array
// arr.concat(arr2);          // Combines two arrays into a new array, (arr+arr2), can be done via loop also 

// const currentDate = new Date();
// console.log(currentDate.getTime());



//Objects in JS
// const users={
//     name: "sumit",
//     age: "23"
// }

// console.log(JSON.stringify(users));    // ye object ko string me convert kar deta hai, jisse hum easily store kar sakte hai, jaise ki localStorage me, ya fir kisi server me bhej sakte hai.


//String in JS
// const user='{"name": "sumit", "age": "23"}'
// // console.log(user[2]);
// console.log(JSON.parse(user));      // ye string ko object me convert kar deta hai, jisse hum easily access kar sakte hai, jaise ki user.name, user.age etc.



console.log(Math.random());   // ye 0 se 1 ke beech me random number generate karta hai, 0 aur 1 ko include nahi karta hai, ye decimal number return karta hai.
console.log(Math.floor(3.2));   // ye number ko floor kar deta hai, jisse hum integer value milti hai, Or LIF (Lesser Integer Function)
console.log(Math.ceil(3.2));    // ye number ko ceil kar deta hai, jisse hum integer value milti hai, Or GIF(Greater Integer Function)
