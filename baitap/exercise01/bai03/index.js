let students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        gender:  "nam",
        age: 20,
        mark: 8,
    },
    {
        id: 2,
        name: "Nguyễn Thị B",
        gender:  "Nữ",
        age: 20,
        mark: 9,
    },
    {
        id: 3,
        name: "Trần Cao C",
        gender:  "Nam",
        age: 21,
        mark: 7,
    }
];

let topStudents = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].mark > topStudents.mark) {
        topStudents = students[i];
    }
}

console.log("Học sinh có điểm cao nhất:");
console.log("ID: ", topStudents.id);
console.log("Name: ", topStudents.name);
console.log("Gender: ", topStudents.gender);
console.log("Age: ", topStudents.age);
console.log("Mark: ", topStudents.mark);
