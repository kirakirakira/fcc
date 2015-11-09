/*jshint multistr:true */

//var text = "Hey what's up everyone, my name is Kira. Kira is the \
//most awesomest Kira around.";

var text = "Hey what's up Katie, my name is Kirt."

var myName = "Kira";

var hits = [];

for (i=0; i<text.length; i++) {
    if (text[i] === "K") {
        var check = []
        for (j=i; j<(myName.length+i); j++) {
            check.push(text[j]);
        }
        var again = (check.join(""));

        if (again === myName) {
            //console.log("again " + again);
            hits.push(again);
            //console.log("hits " + hits);
        }
        else {
            console.log("still checking");
        }

    }
}

if (hits.length ===0) {
    console.log("Your name wasn't found!");
}
else {
    console.log("you are all done" + hits);
}