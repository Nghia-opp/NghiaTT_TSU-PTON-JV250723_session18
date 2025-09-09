// const person = {
//     name : "PETER",
//     age : 25,
//     address : "HCM",
//     tel : "07038524641",
// };

// console.log(person);

function person (name, age, address, tel){
    this.name = name;
    this.age = age;
    this.address = address;
    this.tel = tel;
    this.greet = function (){
        console.log("My name is "+ name);   
    };
}

let person1 = new person ("hai", 25, "HN", "0275268746");

console.log(person1);
