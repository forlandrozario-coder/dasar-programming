const employee = {
    name: "guy",
    address: {
        street: "123 something st",
        city: "sukabumi",
        postalcode: "123321",
    }
}
employee.address.city = "bandung";
console.log(employee.address.street);
console.log(employee.address.city);
console.log(employee.address.postalcode);