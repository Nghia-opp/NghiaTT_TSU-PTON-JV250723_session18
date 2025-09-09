let student = {
    id: 1,
    name: "Nguyễn Văn A",
    gender:  "nam",
    age: 20,
    mark: 8,
};

let newStudent = {
    id: 2,
    name: "Nguyễn Thị B",
    gender:  "Nữ",
    age: 20,
    mark: 9,
};

let students = [];

students.push(student);
students.push(newStudent);

console.log("Thông tin học sinh mới:");
console.log("ID: ", newStudent.id);
console.log("Name: ", newStudent.name);
console.log("Gender: ", newStudent.gender);
console.log("Age: ", newStudent.age);
console.log("Mark: ", newStudent.mark);