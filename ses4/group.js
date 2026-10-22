function groupstudentsbymajor(students) {
    let result = {};
    for(let i = 0; i < students.length; i++) {
        let student = students[i];
        let major = student.major;
        if(result[major] === undefined) {
            result[major] = [];
        }
        result[major].push(student);
    }
    return result;
}
let studentlist = [
    {name: "steve", major: "IT"},
    {name: "kratos", major: "Math"},
    {name: "vader", major: "IT"},
    {name: "janggo", major:"Math"},
    {name: "groot", major:"spanish"}
];
console.log(groupstudentsbymajor(studentlist));