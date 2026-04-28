// const nums=[1 , 2 , 3]
// console.log('nums: ', typeof nums);   //object


          // how to make objects
// const humanbody = {
//     key:"value" ,
//     name:"sarthak",
//     age:"22",
//     bodyparts : {
//         upperpart:"head",
//         lowerpart:"foot"
//     },
//     see: function(){
//         console.log("your eyes sees everything");
//     },
//     arr:[1,2,3,4],
// }

// how to access the object using dot and ["bracket notaion"]
// console.log(humanbody["name"]);
// console.log(humanbody.full_name);


// how to change the value
//    console.log('humanbody: ',humanbody);
//    humanbody.name="sarthakchug"
//    console.log('humanbody: ', humanbody);


// //how to add any property in object
// humanbody.dob = "me nhi btaunga"
// console.log('humanbody: ', humanbody);

//how to delete any property using delete
//  delete humanbody.dob
// console.log('humanbody: ', humanbody.dob);


//can objects have function stored inside it
//how to make nested object
//role of this keyword in side object
// let person ={
//     name:"sarthak" ,
//     age:18,

//     greet:function(){
//         console.log(this.name);
//     }
// };
// person.saygoodmorning = function(){
//    console.log(this.name + " " + "good morning");
   
// }
// console.log();
// person.greet()                            //sarthak
// person.saygoodmorning()                   //sarthak good morning

// person.evegreet = function(){
//    console.log(this.name)
// }
//  person.evegreet();                        //sarthak



                          //some methods
// const humanbody = {
//     key:"value" ,
//     name:"sarthak",
//     age:"22",
//     bodyparts : {
//         upperpart:"head",
//         lowerpart:"foot"
//     },
//     see: function(){
//         console.log("your eyes sees everything");
//     },
//     arr:[1,2,3,4],
// }
// console.log(Object.values(humanbody));         //only value :sarthak 25
// // console.log(Object.keys(humanbody));           //only key: name age
// console.log(Object.entries(humanbody));           //all entries
// console.log(humanbody.hasOwnProperty("arr"));     //true



//some methods example  like Object.keys , .value ,Object.entries, in , hasOwnProperty etc
// let student = {
//    name: "Rahul",
//    age: 20
// };
// console.log(Object.values(student));                        //[ 'Rahul', 20 ]
// console.log(student.hasOwnProperty("name"));                //true
// let nums = [1,2,3,4]                                         
// console.log('nums: ', Array.isArray(student));               //nums:  false
// console.log(typeof student);                                 //object