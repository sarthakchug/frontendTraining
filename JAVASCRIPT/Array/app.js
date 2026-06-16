// console.log("hello array");

//let score =[20,40,50]
// console.log(score);
// score.push(100)
// console.log(score);  //20 40 50 100

// let arr = new Array("sar" , "012345" ,"chug")
// console.log('arr: ', arr);

// let names =["sarthak"]
// names[0]="chug"
// console.log('names: ', names);

// let chararr = [ 's' , 'a' , 'r' , 't']
// console.log('chararr: ', chararr.sort());


// how to access Array using index
// let arr =[1,2,3,4,5];
// console.log('arr: ', arr[4]);   //arr : 5

// how to find the length of an Array
// let arr =[1,2,3,4,5,2,2,8,8,9,8,7,5,4,5,8,4,8,4,9,5,4,5,4,8];    
// console.log('arr: ', arr.length);   //arr:  25
// console.log('arr: ', arr[arr.length]);  //arr:  undefined  
//last length/element of array
// console.log('arr: ', arr[arr.length-1]);  //arr:  8 
     

// let arr =[1,2,3,4,5]
// console.log('arr: ', arr);     //arr:  [ 1, 2, 3, 4, 5 ]
// let char =["a" , "b" , "c" , "d" , "e"];  //char:  [ 'a', 'b', 'c', 'd', 'e' ]
// console.log('char: ', char);  
// let bool =[true,false];
// console.log('bool: ', bool);   //bool:  [ true, false ]
// let str =["sarthak" , "chug"];
// console.log('str: ', str);   //str:  [ 'sarthak', 'chug' ]
// let res =[1,"a",true,"sarthak"]
// console.log('res: ', res);   //res:  [ 1, 'a', true, 'sarthak' ]


//array of object
// let obj = {key:'value'}
// let facultyInfo = [
//   {
//     firstname: "diwaker",
//     lastname: "dwivedi",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "vivek",
//     lastname: "pawar",
//     age: "10",
//     address: "clement town",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "anurag",
//     lastname: "singh",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
// ]; 
//     console.log('facultyInfo: ', facultyInfo);


// let staffinfo = [
//   {
//     firstname: "diwaker",
//     lastname: "dwivedi",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "vivek",
//     lastname: "pawar",
//     age: "10",
//     address: "clement town",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "anurag",
//     lastname: "singh",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
// ]; 
//     console.log('staffinfo: ', staffinfo);


// let studentinfo = [
//   {
//     firstname: "diwaker",
//     lastname: "dwivedi",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "vivek",
//     lastname: "pawar",
//     age: "10",
//     address: "clement town",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "anurag",
//     lastname: "singh",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
// ]; 
//     console.log('studentinfo: ', studentinfo);


//single term arry object
//  let AIfacultyinfo = {
//   firstname: "diwaker",
//   lastname: "dwivedi",
//   age: "10",
//   address: "ballupur",
//   institute: "acadmiac",
//   salary: "12345678",
// };
// console.log('AIfacultyinfo: ', AIfacultyinfo);


//how to update the values in array
// let arr =[1, 2, 3, 4, 5, 6]   //arr:  [ 1, 2, 3, 4, 5, 6 ]
// arr[2] = 'value'
// console.log('arr: ', arr);


// let sarthak =[1,2,3,4,5,2,2,8,8,9,8,7,5,4,5,8,4,8,4,9,5,4,5,4,8]; 
// console.log('sarthak: ', sarthak);

// for (let i=0 ; i<5 ;i++)
// // for (let i=0 ; i<sarthak.length ; i=i+10)  //loop loop loop
//     {
//     console.log("loop");     //loop loop loop loop loop
// }

//while , for of , for in , map , filter , reduce , do while

// let arr=[2,5,6,9,8]
// arr.shift()      //first value remove
// console.log('arr: ', arr);    //arr:  [ 5, 6, 9, 8 ]

// arr.unshift(10)     //first value add
// console.log('arr: ', arr);  //arr:  [ 10, 5, 6, 9, 8 ]

// console.log('arr: ', arr.includes(3));    //it checks whether a value is present or not  //arr:  false
// console.log('arr: ', arr.sort((a,b)=>a-b));  //ascending order  //arr:  [ 2, 5, 6, 8, 9 ]
// console.log('arr: ', arr.sort((a,b)=>b-a));  //descending order  //arr:  [ 9, 8, 6, 5, 2 ]
// console.log('arr: ', arr.indexOf(5));    //arr:  3
// console.log('arr: ', arr.find((x)=>x>5));  //single value   //arr:  6
// console.log('arr: ', arr.filter((x)=>x>5));   //multiple value    //arr:  [ 6, 9, 8 ]


// let arr=[9,10,2,3,4,5];
// for(let i =0 ; i<arr.length;i++){
// console.log(arr[i]);      //9 10 2 3 4 5 
// }
        
// arr.forEach((res)=>{
//   console.log(res);    // //9 10 2 3 4 5 
// })
                
                
// let arr=[1,2,3,4]
// let val1 =arr.some((res)=>res>3) // f f f t ||or
// console.log('val: ', val1);  //val:  true
                
                
// let val2 =arr.every((res)=>res>0)  //f f f t &&and
// console.log('val: ', val2); //val:  true
                
// let val = arr.splice(1,0,100,200)
// console.log('remove: ', val);   //remove:  []
// console.log('original array: ', arr);  //original array:  [ 1, 100, 200, 2, 3, 4 ]
// let arr2 =[20,30,40,50]
// let arr =[9,10,2,3,4,5]
                
// //array->string
// let res= arr.join('')       //res:  9-10-2-3-4-5
// console.log('res: ', res);
                
//string->array
// let str = "sarthak";
// let array = Array.from(str);
// console.log(array);    //[  's', 'a', 'r',  't', 'h', 'a',  'k']
                
                







