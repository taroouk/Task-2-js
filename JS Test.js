let products = ["TV", "T-Shirt", "phone"];
let prices = [1000, 2000, 3000];
let inStock = [true, false, true];
let electronics = [0, 2];
let clothing = [1];
let product = {
    name: products,
    Price : prices,
    InStock : inStock
}
document.writeln("Products are: " + product.name ) ;
document.writeln("<br>") ;
document.writeln("Prices are: " + product.Price ) ;
document.writeln("<br>") ;

var pricessum = prices[0] + prices[1] + prices[2];

document.writeln("Total price is: " + pricessum ) ;
document.writeln("<br>") ;

if ( pricessum > 5000 ) {
     document.writeln("Total price after discount is: " + 0.9 * pricessum ) ; }
document.writeln("<br>") ;
document.writeln("<br>") ;
if ( product.InStock[0] == true ) { 
     document.writeln("Tv product is in stock " ) ;
     document.writeln("<br>");
}
if ( product.InStock[1] == false ) { 
     document.writeln("T-shirt product is out of stock " ) ;
     document.writeln("<br>");
}
if ( product.InStock[2] == true ) { 
     document.writeln("Phone product is in stock " ) ;
     document.writeln("<br>");
}
document.writeln("<br>") ;
document.writeln("<br>") ;
if ( product.Price,product.InStock[0] < 2000 ) { 
     document.writeln("Tv product is in stock and price is less than 2000 " ) ;
     document.writeln("<br>");
}
if ( product.Price,product.InStock[1] < 3000 ) { 
     document.writeln("T-shirt product is out of stock and price is less than 3000 " ) ;
     document.writeln("<br>");
}
if ( product.Price,product.InStock[2] < 4000 ) { 
     document.writeln("Phone product is in stock and price is less than 4000 " ) ;
     document.writeln("<br>");
}
document.writeln("<br>") ;
document.writeln("<br>") ;

if ( pricessum > 1000 ) {
    document.writeln("Less than 1000: low budget") ;
document.writeln("<br>") ;}
if ( pricessum > 2000 ) {
    document.writeln("More than 2000: medium budget") ;
document.writeln("<br>") ;}    
if ( pricessum > 5000 ) {
    document.writeln("More than 5000: high budget") ;}

document.writeln("<br>") ;
document.writeln("<br>") ;

switch ( electronics) {
    case electronics:
        document.writeln(" For electronics Take care of warranty!") ;
        break;
}

document.writeln("<br>") ;

switch ( clothing) {
    case clothing:
        document.writeln(" For clothing Take care of size!") ;
        break;
}
