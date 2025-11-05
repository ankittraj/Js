const account_Id = 144558
let account_Email = "ankit@google.com"
var account_Password = "12345"
accountCity = "Noida"
let account_State;

//account_Id = 2 //not allowed

account_Email = "hycsd@gmail.com"
account_Password = "212221"
accountCity = "Delhi"

console.log(account_Id);

/*
We prefer not to use var (especially in modern JavaScript ES6+) because of issues related to block scope and functional scope.

Variables declared with var are function-scoped, not block-scoped.
This means var variables are accessible outside the block ({}) in which they are defined — which can cause unexpected behavior and bugs.

function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ Output: 10 (x is accessible outside the block)
}
testVar();

*/

console.table([account_Id, account_Email, account_Password, accountCity, account_State]);

