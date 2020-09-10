var x = 27;
var order = 'Beer';

if (x > 50 && x < 100) {
    document.write("<h1>He's over 50!</h1>" );
} else if (x <= 50 && x > 30){
    document.write("<strong>Middle aged man</strong>, who ordered some "+order);
} else if (x < 18) {
    document.write("Kids order soft drinks");
} else if (x> 120) {
    console.log("Check the age, please");
} else 
    document.write ("You are ordering " + order);