/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var ticketPrice = 800;
var age = 62;
var person = 'stude';

if (age < 10) {
    console.log('free for children');
}
else if (person === 'students') {
    // 50% discount
    var discount = ticketPrice * 50 / 100;
    var price = ticketPrice - discount;
    console.log('for students', price);
}
else if (age >= 60) {
    // 15% discount
    var discount = ticketPrice * 15 / 100;
    var price = ticketPrice - discount;
    console.log('senior citizens:', price);
}
else {
    console.log(ticketPrice);
}