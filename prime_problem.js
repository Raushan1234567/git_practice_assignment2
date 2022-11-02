let number=13;
let count=0;
for(let i=1;i<=num;i++)
{
   if(number%i==0) {
    count++;
  }
 }
if(count==2) {
console.log("prime number");
} else {
console.log("not prime");
}