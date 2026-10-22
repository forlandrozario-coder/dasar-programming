function deepclone(value) {
    if (value === null || typeof value !== `object`) {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map(item => deepclone(item));
    }
    const clone ={};
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            clone[key] = deepclone(value[key]);
        }
    }
    return clone;
}
const original = {
    name: "steve",
    hobbies: ["gaming","music"],
    address: {city : "sukabumi"}
};
const copy = deepclone(original);
copy.address.city = "bandung";
copy.hobbies.push("basketball");
console.log(original.address.city);
console.log(original.hobbies);