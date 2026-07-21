// syntax of a function

/*function addNumbers(Number1, Number2){
//let result = Number1 + Number2 
//return result

return Number1 + Number2
console.log("hammas")

}
const result = addNumbers(4, 5)


//console.log("Result : ", result)*/


function useloginMessage(username)
{
    if(username === undefined)
    {
        console.log("Please Enter a username")
        //return
    }
    return `${username} logged in `
}
console.log(useloginMessage())
