book = {
    Title: "lord of the rings",
    author: "J.R.R. Tolkien",
    year: 1954,
}
function getproperty(object, key) {
    return object[key];
}
console.log(getproperty(book, "Title"));
console.log(getproperty(book, "author"));
console.log(getproperty(book, "year"));