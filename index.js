function barf() {
    return "barf";
}

function vomit() {
    return "vomit";
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