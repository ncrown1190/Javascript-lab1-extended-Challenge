//let hours = 20;
let hours = 50;
//let wage = 10;
let wage = 15;
if (hours <= 40) {
  let pay = wage * hours;
  console.log(pay);
} else {
  pay = (hours - 40) * 1.5 * wage + 40 * wage;
  console.log(pay);
}
let numberOfweeks = Math.round(1000000 / pay);
console.log(numberOfweeks);
