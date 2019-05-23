console.log("Entered payment.js");
var thePrincipal;
var monthly; 
var thePrice;
var tax;

function principal() {
    
    var theDownPayment = parseFloat(document.querySelector("#downPayment").value);
    console.log("The agreed price is " + thePrice);
    console.log("The downPayment is " + theDownPayment);
    thePrincipal = thePrice - theDownPayment;
   
    console.log(thePrincipal);
    document.querySelector("#resultPrincipal").innerHTML = thePrincipal;
    document.querySelector("#resultPrincipal").style.color = 'white';
    document.querySelector("#resultPrincipal").style.fontFamily = 'Raleway,sans-serif';
}
function theTax() {
    tax = parseFloat(document.querySelector("#tax").value);
    thePrice = parseFloat(document.querySelector("#price").value);
    console.log("The tax is " + tax);
    console.log("The old price is " + thePrice);
    thePrice = (((tax / 100)+1) * thePrice);
    console.log("The new price is " + thePrice);
    document.querySelector("#afterTax").innerHTML = ( thePrice.toFixed(2) );
    document.querySelector("#afterTax").style.color = 'white';
    document.querySelector("#afterTax").style.fontFamily = 'Raleway,sans-serif';
}


function calcPayment() {
    console.log("YES!!! I clicked a button and have entered calcPayment()");
    var theAPR = parseFloat(document.querySelector("#apr").value);
    var theMonths = parseFloat(document.querySelector("#numberPayments").value);
    console.log("The entered APR is " + theAPR);
    theAPR = theAPR/100;
    console.log("The APR changed to decimal form is " + theAPR);
    console.log("The entered timeframe is " + theMonths + " months");

    var numerator = thePrincipal * (theAPR/12) * ((1+(theAPR/12)) ** theMonths);
    console.log("The numerator is " + numerator);
    var denominator = ((1+(theAPR/12)) ** theMonths)-1;
    console.log("The denominator is " + denominator);
    monthly = numerator/denominator;
    monthly = ( monthly.toFixed(2) );
    console.log("The Monthly Payment is " + monthly);
    document.querySelector("#monthlyPay").innerHTML = monthly;
    document.querySelector("#monthlyPay").style.color = 'white';
    document.querySelector("#monthlyPay").style.fontFamily = 'Raleway,sans-serif';
    
}
