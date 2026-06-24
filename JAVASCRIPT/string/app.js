                                                    //METHODS
// console.log("hello world");  //hello world

//type of
// console.log(typeof val);  //undefined
// val={}
// console.log(typeof val);   //object
// val=[]
// console.log(typeof val);  //object
// val="name"
// console.log(typeof val);    //string
// val = new String("name")
// console.log(typeof val);      //object
// let a ="10";
// console.log('a: ',typeof a);    //string(ye humsha comma ma hota ha)
// let c =10;
// console.log('c: ',typeof c);   //number

// let a="10";    //string khete ha agar phle number h  or bad " " ye ha to phle add karaga phr baad m string banyaga (1,2,3,"4",5)=645
// let c= 10;     //nan -not a number
// console.log(a+c);    // it gives 1010     (string sum ko add nhi karta)
// console.log(a-c);    // it gives 0
// console.log(a/c);    // it gives 1
// console.log(c==a);      //true  (checks only number)
// console.log(c===a);     //false  (checks number and type also)

// let name1="sarthak hello good morning"
// console.log('name1: ', name1);       //name1:  sarthak hello good morning

// let name1="sarthak"
// let name2="chug"
// let res=name1.toUpperCase()
// console.log(name1+name2)    //sarthakchug
// console.log(name1+ " "+name2)  //space->sarthak chug
// console.log(name1.concat(" ",name2));  //concat->(adds)sarthak chug
// console.log(`welcome ${name1} ${name2}`);  //Back-Tics `` and interpolation  $ -> welcome sarthak chug  (template literals)
// console.log(`${2+2} ${name2}`);   //4 chug
// console.log(name1.length);      //7
// console.log(name1[name1.length-1]);   //k(last length)
// console.log(name1[5]);        //a(counts with 0)
// console.log(name1.at(3));     //t(starts character with index 0)
// console.log(name1.charAt(3));    //t(starts character with index 0)
//  console.log(name1.indexOf("good"));   //14
// console.log(name1.at(-1));   //k

//  console.log(name1.lastIndexOf("h"));   //4
// console.log(name1.endsWith('morning'));   //false
// console.log(res.startsWith('SAR'));   //true



// let atmpin = "********1224"
// console.log(atmpin.startsWith('*'));         //true

// console.log(name1.split(" "));     //[ 'sarthak', 'hello', 'good', 'morning' ]  //array m convert karta ha

// let email = "sarthakchug007@gmail.com"
// console.log(email.includes("@"));     //true

//  console.log(name1.slice(8,13));   //but in - it counts from last        //hello
//  console.log(name1.substring(8,13));   //it does not follow negative   //hello

// let aadharCard =512656334423435
// let updatedAdharCard = "5126"
// console.log('aadharCard: ', aadharCard);
// console.log('updatedAdharCard: ', updatedAdharCard.padStart(16,"*"));     //updatedAdharCard:  ************5126
// console.log('updatedAdharCard: ', updatedAdharCard.padEnd(16,"*"));       //updatedAdharCard:  5126************

// const classname = 'sarthak "chug"'               //classname:  sarthak "chug"
// const classname = "sarthak 'chug'"               //classname:  sarthak 'chug'
// const classname = 'sarthak \'chug\' '              //classname:  sarthak 'chug' 
// console.log('classname: ', classname);

// let name2="              chug            "
// console.log('name2: ', name2);                //       chug
// console.log('name2: ', name2.trim());         // chug
// console.log('name2: ', name2.trimStart()); //chug - start ki space hatayga       
// console.log('name2: ', name2.trimEnd());     //        chug -last kin space hatyga    

// let finalversion = name2.trim()
// console.log('finalversion: ', finalversion.length);   //finalversion:  4

// let str="hello world"
// let str2="it's monday"
// console.log(`hello               
// world`);   //back ticks      //hello world

// console.log("it's monday");     //it's monday
// console.log('it"s monday');    //it"s monday

// let subject ="html css javascript html"
// console.log(subject.replace('html', 'react'));   //react css javascript html
// console.log(subject.replaceAll('html', 'react'));   //react css javascript react

// let greet ="hello "
// console.log(greet.repeat(4));   //hello hello hello hello 











