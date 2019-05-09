findTheSumOfTop2 = (array) => {
    let sortedArray =  descendingSort(array);
    
    return sortedArray[0] + sortedArray[1];
}

descendingSort = (input) => {
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input.length - i; j++) {
            if (input[j] < input[j + 1]) {
                let swapNumber = input[j];
                input[j] = input[j + 1];
                input[j + 1] = swapNumber;
            }
        }
    }
    return input;
}

console.log(findTheSumOfTop2([2,3,4,2,1,2,4,7]));
