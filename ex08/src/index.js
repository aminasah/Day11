var myMutationArr=["hello","hello"];
function myMutation(arr){
    let word = ''
    for(let i=0;i<arr.lenth;i++){
        word+=arr[i][0];
    }
    for(let j=0;j<arr.lenth;j++){
       if(word == arr[j+1]){
           return true
       }
    }

    return false;
}
console.log(myMutation(myMutationArr));
module.exports=myMutation;