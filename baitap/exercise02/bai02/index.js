
let classList = [
    {
        id :1,
        name : "HTML",
        complete : "false"
    },
    {
        id :2,
        name : "CSS",
        complete : "false"
    },
    {
        id :3,
        name : "Basis of javascript",
        complete : "false"
    }, 
    {
        id :4,
        name : "Node package Manager (npm)",
        complete : "false"
    }, 
    {
        id :5,
        name : "Git",
        complete : "false"
    },    
];

while(true) {
    let userInput = prompt("Please input C/R/U/D to manage your class list");

if (userInput === "C") {
    let name = prompt("Please input new class name");
    let complete = prompt(`Please input new complete for ${name}`);

    let contact = {
        id: Math.random(),
        name: name,
        complete: complete,
    };

    classList.push(contact);
    
    displayClass();
} else if (userInput === "R") {
    displayClass();
} else if (userInput === "U") {
    let name = prompt("Please input class name that you want to update");

    let index = classList.findIndex(function(el, i) {
        return  el.name === name;
    });

    if (index === -1) {
        console.log("class not found");
    } else {
        let class1 = prompt(`Please input new class for ${name}`);
        classList[index].name = name;
        displayClass();
    }
} else if (userInput === "D") {
    let name = prompt("Please input class name that you want to delete");

    let index = classList.findIndex(function(el, i) {
        return  el.name === name;
    });

    if(index === -1) {
        console.log("class not found");   
    } else{
        classList.splice(index, 1);
        displayClass();
    }
} else if (userInput === "E") {
    console.log("Thanks for using the app ");
    break;
} else {
    console.log("Invalid command");
};
};

function displayClass () {
    console.log("Your class list:");
    for (let index in classList) {
        console.log(("Name:", classList[index].name));
        console.log(("complete:", classList[index].complete));
        console.log("------------");
    };
};