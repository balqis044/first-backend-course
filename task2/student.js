let students = [];

function createStudent(name, age, mark){

    return {name: name,age: age,mark: mark  };
}

students.push(createStudent("Balqees", 23, 99));
students.push(createStudent("Belal", 22, 50));
students.push(createStudent("Aser", 19, 28));
students.push(createStudent("Diana", 21, 55));
students.push(createStudent("Amen", 19, 88));

let successStudents=[];
let failedStudents =[];

for (let student of students) {
    if (student.mark >= 50) {
       successStudents .push(student);
    } else {
        failedStudents.push(student);
    }
}

console.table( successStudents);

console.table(failedStudents);
