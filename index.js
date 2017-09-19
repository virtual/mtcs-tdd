function barf() {
    return "barf";
}

function vomit() {
    return "vomit";
}
function returnDate(d) {
    var newDate = new Date(d);
    var todayDate = new Date();
    var diff = Math.ceil((newDate - todayDate) 
    / (24 * 60 * 60 * 1000));
    return diff;
} 

if (returnDate("12/25/17") === 97) {
    console.log('test 3 passed');
} else {
    console.log('test 3 failed, days until Christmas, 97');
}
if (returnDate("9/20/17") === 1) {
    console.log('test 4 passed');
} else {
    console.log('test 4 failed');
}
if (vomit() === "vomit") {
    console.log('test 2 passed')
} else {
    console.log('test 2 failed, vomit not returned')
}

if (barf() === "barf") {
    console.log('test 1 passed');
} else {
    console.log('test 1 failed, barf not returned');
}