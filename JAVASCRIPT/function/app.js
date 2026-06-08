           // function invocation
// function sayHello() {
//   return "Hello World";
// }

// console.log(sayHello());      //hello world

                // role of return keyword
// function sum(){
//       let x=10+20;
//       return x;
// }
// // console.log(sum());     //30
// let res =sum();
// console.log(res);         //30


      //function follow hoiting with this example
// console.log("Start");
// function show(){
//       console.log("good morning");
// }
// console.log(show);                  //[Function: show]
// console.log("End");
// show()                       //Start  End  good morning
// console.log(show());       //undefined    


           // pass be value example
// function change(x){
//     x=50;
//     console.log("inside:", x);   //50
// }

// let a=10;

// change(a);

// console.log("outside:" , a);   //10
    

        // pass be reference example
// function change(user){
//     user.name ="sarthak";
// }
// let person = { name: "diwaker"};

// change(person);

// console.log(person);   //sarthak

      // pass be reference example 2
// function add(arr){
//     arr.push(4);
//     // arr.pop();         // 1 2 3
// }
// let nums=[1,2,3];
// add(nums);
// console.log(nums);   //1 2 3 4.


//the argument object
// function show() {
//   console.log(arguments);
// }

// show(10, 20, 30);

//arrow function have argument object ?  //no
// let show = ()=>{
//     console.log(arguments);
// }

// show(10,20,30)

                //parameters vs arguements
// function show(){
//     console.log('hello');
// }
// show()                //hello

// function multiply(a, b) {
//   return a * b; //->this is return keyword
// }
// console.log(multiply(4, 5));    //20

                     //function expression
// const greet = function () {
//   console.log("Hello");
// };
// greet();     //hello

// let sayHi = function() {
//     console.log("Hi");
// };
// sayHi();          //Hi

     //
// function  greet(hello) {
//   console.log("Hello");
// };
// greet("good morning");  

// function greet(msg="hello world") {
//   console.log("msg");
// };
// greet();    


// arrow function->
// const sum =()=>{
//       return "hello"
// }
// console.log("good");    //hello





