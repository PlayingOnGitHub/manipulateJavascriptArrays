let singleArray = [1, 2, 3, 4];

let convertSingleArrayToOutsideDoubleArray = [singleArray];

let convertSingleArrayToInsideDoubleArray = singleArray.map( x => [x] );

let outsideDoubleArray = [[1, 2, 3, 4]];

let convertOutsideDoubleArrayToSingleArray = outsideDoubleArray.reduce( x => x )

let insideDoubleArray = [ [1], [2], [3], [4] ];

let convertInsideDoubleArrayToSingleArray = insideDoubleArray.reduce( (accumulator, currentValue) => {
    accumulator += currentValue;
    if (insideDoubleArray[currentValue] == null || insideDoubleArray[currentValue] == undefined ) {
        accumulator = accumulator.split("");
    }
    return accumulator;
} );

/******* or do this below *******/

let convertInsideDoubleArrayToASingleArray = insideDoubleArray.reduce( (accumulator, currentValue) => accumulator += currentValue );

convertInsideDoubleArrayToASingleArray = convertInsideDoubleArrayToASingleArray.split("");