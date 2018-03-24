var gbpRate;
var usdRate;
var myAmount;
var result;





$(document).ready(function(){
    const key = "1c5e1d44909fc75f9e66f49e3d97ae6d" ; //
    $.ajax({
        url: 'http://data.fixer.io/api/latest?access_key=' + key,
        dataType: 'jsonp',
        success: function(json) {
            console.log(json);
            gbpRate = json.rates.GBP;
            // eurRate = json.rates.EUR;
            usdRate = json.rates.USD;
        },
        fail: function(xhr, statusText, body) {
            console.log(body);
            console.log(gbpRate);
            console,log(usdRate);
        }
    });

});
function showResult(){
    myAmount= document.getElementById("amount").value;
    if(document.getElementById("target").value.toUpperCase()=="USD"){
        result= myAmount * usdRate;
    }
    else if(document.getElementById("target").value.toUpperCase()=="GBP"){
        result= myAmount*gbpRate;
        console.log(result)

    }
}
function displayresult(){
  showResult();
  $("#result")[0].value=result;
}
