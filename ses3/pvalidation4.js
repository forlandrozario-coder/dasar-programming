const password = "password12345";
if (password.length < 8) {
    console.log("too short")
}else if (password.length >= 8 && password.length <=11) {
    console.log("moderate")
}else if (password.length >= 12) {
    console.log("strong")
}