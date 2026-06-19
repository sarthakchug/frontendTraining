// const nums=[1 , 2 , 3]
// console.log('nums: ', typeof nums);   //object


        
// const info= {
//     address:{
//         state:{
//             name:'UK',
//             city:'dehradun',
//             pincode:{
//                 value:'248001'
//             }
//         }
//     }
// }
    //how to make nested object
// console.log(info.address.state.pincode.value);  //248001

   //optional chaining
// console.log(info?.address?.state?.pincode?.value);  //248001

// let person ={
//     firstname:"sarthak",
//     lastname:"chug",
//     age:"22",
//     adress:"vikasnagar",
//     // [institue.name]:"academiac"
// // }

           //how to access values
// console.log('person: ', person.firstname);  //person:  sarthak
// console.log('person: ', person.salary);   //person:  undefined

       // how to add elements
// person.email="sarthakchug007@gmail.com"
// console.log('person: ', person);    //email="sarthakchug007@gmail.com"

    //how to update any elemnt
// person.age="25"
// console.log('person: ', person);  //age="25"

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

// object destructing

// const facultyinfo={
//     firstname:"sarthak",
//     faculty:'web tech',
// }
// console.log(facultyinfo['firstname']);  //firstname:  sarthak
// facultyinfo.firstname,
// facultyinfo.faculty

//object destructure

// const{firstname , faculty}=facultyinfo
// console.log('firstname: ', firstname);   //firstname:  sarthak

// const {firstname:name , faculty:role , age=10}=facultyinfo
// console.log('role: ', role);   //role:  web tech
// console.log('firstname: ', name);  //firstname:  sarthak
// console.log('age: ', age);  //age:  10



// const user1={
//     name:'sarthak',
//     age:10
// }

// const user2={
//     name:'chug',
//     age:100
// }
// const result={...user1 , ...user2}  //spread operator
// console.log('result: ', result);   //result:  { name: 'chug', age: 100 }

// const res= {...user1}
// console.log('res: ', res);   //res:  { name: 'sarthak', age: 10 }

// pass by refrence
// function change(obj){
//     // let res ={...obj}   //shallow copy
//     let res =structuredClone(obj)   ////deep copy concept -original ko change nhi kara
//     res.address.city='vikasnagar'
//     console.log('res: ', res);      //res:  { name: 'sarthak', age: 10, address: { city: 'vikasnagar' } }
// }

// const user1={
//     name:'sarthak',
//     age:10,
//     address:{  //deep copy concept
//         city:'dehradun'
//     }
// }
// change(user1)
// console.log('user1: ', user1);   //user1:  { name: 'sarthak', age: 10, address: { city: 'vikasnagar' } }


//has own property -> true ya false deta ha 



