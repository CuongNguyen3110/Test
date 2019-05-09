const testCases = require('./test-cases.json');
const findTheMostAppearStringLength = require('./findTheMostAppearStringLength');

let successCase = 0;
let failCase = 0;

// loop through all the cases
testCases.forEach((test) => {
    if (findTheMostAppearStringLength(test.array) === test.output) {
        successCase += 1;
    } else {
        failCase += 1;
    }
});

console.log(`
    Success cases : ${successCase}
    Fail cases: ${failCase}
`)
