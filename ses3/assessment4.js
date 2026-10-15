const score = 75;
const attendance = 0.80;
const assignments = 0.80;
if (score >= 60 && attendance >= 0.75 && assignments >= 0.80) {
    console.log("passed");
}else if (score >= 60 && attendance >= 0.75 && assignments < 0.80) {
    console.log("you didnt submit enough assignments");
}else if ( score >= 60 && attendance < 0.75 && assignments >= 0.80) {
    console.log("you didnt attend enough classes");
}else if (score < 60 && attendance >= 0.75 && assignments >= 0.80) {
    console.log("you didnt score enough marks");
}else if (score < 60 && attendance < 0.75 && assignments >= 0.80) {
    console.log("you didnt score enough marks and you didnt attend enough classes");
}else if (score < 60 && attendance >= 0.75 && assignments < 0.80) {
    console.log("you didnt score enough marks and you didnt submit enough assignments");
}else if (score >= 60 && attendance < 0.75 && assignments < 0.80) {
    console.log("you didnt attend enough classes and you didnt submit enough assignments");
}

    