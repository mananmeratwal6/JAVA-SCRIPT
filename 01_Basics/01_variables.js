const accountId = "12345"
let accountEmail = "manan@gmail.com"
var accountPassword = "6466464"
accountCity = "jaipur"
let accountPin;

// accountId = 2  Not allowed

accountEmail = "man@gmail.com"
accountPassword = "123456"
accountCity = "Los Angles"

// prefer not to use var beacuse of issue in block scope and func scopr

console.table([accountEmail,accountPassword,accountCity,accountPin]);
