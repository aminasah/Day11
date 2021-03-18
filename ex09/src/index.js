var myArray=[7,"ate","",false,9];

function myBouncer(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==false || arr[i]==null  || arr[i]==""|| arr[i]==NaN){
            arr.splice(i,1);
        }

    }

    return arr;
}

console.log(myBouncer(myArray));
module.exports=myBouncer;
