// Create a myPetsArray array here
var monitorsListArray=["Apple","Peach","Berry"];
// End of myPetsArray array

function myMonitorsFunction(arr){
    var newMonitorsFunction=[...arr];
    // only change code below this line
    var monitorsList=[];
    for(var i=0;i<newMonitorsFunction.length;i++){
        monitorsList.push([newMonitorsFunction[i],i+1]);
    }
    return monitorsList;
     // Only change code above this line

}
console.log(myMonitorsFunction(monitorsListArray));
module.exports=myMonitorsFunction;