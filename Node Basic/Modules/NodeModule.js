const sum = (a,b)=> a+b;
class College{
    constructor(){
        console.log("Constructor called");
    }
}
//One way to export all module classes and parameter and function  out of the module.
//module.exports.sum =sum;
//module.exports.College = College;
//Second way to export the modules events is shown below.
module.exports ={sum:sum, College: College }

