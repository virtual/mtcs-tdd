function barf() {
    return "barf";
}

function vomit() {
    return "vomit";
}
function returnDate(d) {
    if (!d) {
        
        var newDate = new Date().setHours(0, 0, 0);    
    } else {
        var newDate = new Date(d);
    } 
    var christmasDate = new Date("12/25/17");
    var diff = Math.floor((christmasDate - newDate) 
    / (24 * 60 * 60 * 1000)); 
    return diff;
} 

if (returnDate() === 97) {
    console.log('test 5 passed');
} else {
    console.log('test 5 failed, days until Christmas, 97');
}

if (returnDate("12/25/17") === 0) {
    console.log('test 4 passed');
} else {
    console.log('test 4 failed');
}
if (returnDate("9/19/17") === 97) {
    console.log('test 3 passed');
} else {
    console.log('test 3 failed, days until Christmas, 97');
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