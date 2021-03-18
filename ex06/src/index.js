var myArray=[
    [2],
    [5,6,7],
    [8,9]
];

function multiplyArrayFunction(myArray){
    var product=1;
    var sum=0;
    for (var i=0; i < myArray.length; i++){

        for(var j=0; j < myArray[i].length;j++){
            product*=myArray[i][j];
            sum+=myArray[i][j];
        }
     
    }
    var arr=[product,sum];
    
    return arr;
}

console.log(multiplyArrayFunction(myArray));
module.exports=multiplyArrayFunction;