var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused")
}

// the var a is false since 2 is less than 12 that's the output is "Code is Blasted"

//  to make the output "Diffused" we need to change the condition to true , it can be done as follows


var a = "2" < "12"; //change the greater than symbol to less than
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}