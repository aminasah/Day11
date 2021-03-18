var myArray=[
    [13,27,18,26],
    [4,5,1,3],
    [32,35,37,39],
    [1000,1001,857,1]
];

function largestNumFromArr(arr){
    var maxNumArray=[];
    var max=arr[0][0];
    for(var i=0;i<arr.length;i++){
        max=arr[i][0];

        for(var j=0;j<arr[i].length;j++){
            
            if(max < arr[i][j]){
                max=arr[i][j];
            }
        }
        maxNumArray[i]=max;
    }
    return maxNumArray;
}
console.log(largestNumFromArr(myArray));
module.exports=largestNumFromArr;