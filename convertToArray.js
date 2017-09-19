//write a javascript function to convert an object into a list of [key, value] pairs
function convertToArray(obj) {
    var myArray = [];
    if (obj) {
        var objKeys = Object.keys(obj); 
        //for (var i = 0; i < objKeys.length; i++) {
            // myArray.push(objKeys[i] + ": " + obj[objKeys[i]]);
        //}

        objKeys.forEach((k, i) => {
            console.log(k, i); 
            myArray.push(k + ': ' + obj[k])
        });    
    }
    return myArray;
}

if (Array.isArray(convertToArray())) {
    console.log("test 1 passes")
} else {
    console.log("test 1 failed")
}
// {key1:1, key2: 2} --> ['key1: 1', 'key2: 2', ...]
var test2Actual = convertToArray({a: 1})
if (test2Actual[0] === "a: 1") {
    console.log('test 2 passes')
} else {
    console.log('test 2 failed', test2Actual)
}
var test3Actual = convertToArray({b: 3});
if (test3Actual[0] === "b: 3") {
    console.log('test 3 passed');
} else {
    console.log('test 3 failed', test3Actual);
}

var test4Actual = convertToArray({a: 1, b: 3});
if(test4Actual[0] === "a: 1" && test4Actual[1] === "b: 3"){
    console.log("test 4 passes.");
} else {
    console.log('test 4 failed', test4Actual);
}

var test5Actual = convertToArray({cows: "purple", jumping: "jeanine", random: "people"});
if(test5Actual.toString('[cows: "purple", jumping: "jeanine", random: "people"]')){
    console.log("test 5 passes.");
} else {
    console.log('test 5 failed', test5Actual);
}

if (convertToArray({}).length === 0) {
    console.log("test 6 passes")
} else {
    console.log("test 6 failed")
}