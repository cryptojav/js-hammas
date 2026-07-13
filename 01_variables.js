const accountId = "1234432"
let accountEmail = "hammasjaved50@gmail.com"
var accountPassword = "1332244"
let accountState;


/*
prefer not to use var because of issue in block scopes and functional scopes.
*/

//accountId = "4" //const variables cannot be changed.

console.log(accountId);

accountEmail = "hammas@gmail.com"
accountPassword = "1234567"

console.table([accountEmail, accountPassword, accountState]);