findTheMostAppearStringLength = (array) => {

    let length = {};

    for (i=0; i < array.length; i++) {

        let stringLength = array[i].length;

        if (length[stringLength]) {
            length[stringLength] += 1;
        } else {
            length[stringLength] = 1;
        }
    }

    let theMostAppearStringLength = 0;
    let theLargestNumber = 0;

    for (let key in length) {
        if (length[key] > theLargestNumber) {
            theLargestNumber = length[key];
            theMostAppearStringLength = key;
        }
    }

    return theMostAppearStringLength;
}


console.log(findTheMostAppearStringLength(['a','ab','abc','abc','ab']));