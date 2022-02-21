var cToF = true;
var bN = document.querySelector("#bV");
var aN = document.querySelector("#aV");
var bUn = document.querySelector("#bU");
var aUn = document.querySelector("#aU");

function exch() {

    bN.value = "";
    aN.value = "";

    if(cToF) {
        cToF = false;
        bUn.innerHTML = "&#8457;"
        aUn.innerHTML = "&#8451;"
    }
    else {
        cToF = true;
        bUn.innerHTML = "&#8451;"
        aUn.innerHTML = "&#8457;"
    }
}

function result() {
   if(cToF) {
    aN.value = (bN.value * 1.8 + 32).toFixed(2);
   } 
   else {
    aN.value = ((bN.value -32) * 0.55).toFixed(2);   
   } 
}