const accountId = 144553
let accountEmail = "js@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

/*
nowadays we don't use var 
because of issue in block scope and functional scope
*/

console.log(accountId);

accountEmail = "fake@google.com"
accountPassword = "54321"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])