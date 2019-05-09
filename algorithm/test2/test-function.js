const testCases = require('./test-cases.json');
const findTheSumOfTop2 = require('./findTheSumOfTop2');

let successCase = 0;
let failCase = 0;

testCases.forEach((test) => {
    if (findTheSumOfTop2(test.array) === test.output) {
        successCase += 1;
    } else {
        failCase += 1;
    }
});

console.log(`
    Success cases : ${successCase}
    Fail cases: ${failCase}
`)

