


var elForm = document.querySelector(".js-form")
var elInput = document.querySelector(".js-input")
var elResult = document.querySelector(".js-result")
var elSellect = document.querySelector(".js-sellect")
    var doler = 11000;
    var evro = 11800;
    var rubl = 190;
    
    elForm.addEventListener("submit", function(evt){
        
        evt.preventDefault();
            var inputVal = +elInput.value;
            var sellectVal = elSellect.value;
            if(sellectVal = "USD"){
                elResult.textContent = inputVal / doler;
                
            }
            if(sellectVal = "RUB"){
                elResult.textContent = inputVal / rubl;
                console.log(inputVal / rubl);
            }
            if(sellectVal = "EVRO"){
                elResult.textContent = inputVal / evro;
                
            }
            else {
                elResult.textContent = "dddd"; 
            }

            elInput.value = " ";
        })
        
