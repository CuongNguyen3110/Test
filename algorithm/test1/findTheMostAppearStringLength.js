findTheMostAppearStringLength = (array) => {

    let numberOfAppearance = {};
    let maxCount = 0;
    let theMostAppearStringLength = 0;

    for (i=0; i < array.length; i++) {

        let stringLength = array[i].length;

        if (numberOfAppearance[stringLength]) {
            numberOfAppearance[stringLength] += 1;
        } else {
            numberOfAppearance[stringLength] = 1;
        }

        if (numberOfAppearance[stringLength] > maxCount) {
            maxCount = numberOfAppearance[stringLength];
            theMostAppearStringLength = stringLength;
        }
    }

    return Number(theMostAppearStringLength);
}

module.exports = findTheMostAppearStringLength;