//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    const array2 = ['hi', 'gray', false, true, 'maria', 1, 14, true];
    console.log(countNumbers(array));
    console.log(countNumbers(array2));
}

const ex2 = () => {
    // TODO...
}

const ex3 = () => {
    // TODO...
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    array.forEach(num => {
        if (typeof num === "number") {
            retval++;
        }
    })
    return retval;
}



const main = async () => {
    ex1();
}

main();
