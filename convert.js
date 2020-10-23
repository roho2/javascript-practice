//Made by Robert Hollinger
//Last edited 10/22/2020

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	//Event listener for when user presses convert button
   document.getElementById("convertButton").addEventListener("click", function() {
		if(document.getElementById("cInput").value != ""){
			//Check if input is valid number, if not set error message
			if(isNaN(parseFloat(document.getElementById("cInput").value))){
				document.getElementById("errorMessage").innerHTML = document.getElementById("cInput").value + " is not a number.";
				return;
			}
			else{
				document.getElementById("errorMessage").innerHTML = "";
			}
			let result = convertCtoF(parseFloat(document.getElementById("cInput").value));
			document.getElementById("fInput").value = result;
		}
		else{
			//check if input is valid number, if not set error message
			if(isNaN(parseFloat(document.getElementById("fInput").value))){
				document.getElementById("errorMessage").innerHTML = document.getElementById("fInput").value + " is not a number";
				return;
			}
			else{
				document.getElementById("errorMessage").innerHTML = "";
			}
			let result = convertFtoC(parseFloat(document.getElementById("fInput").value));
			document.getElementById("cInput").value = result;
		}
		
		if(parseFloat(document.getElementById("fInput").value) < 32){
			document.getElementById("weatherImage").src = "images/cold.png";
		}
		else if(32 <= parseFloat(document.getElementById("fInput").value) && parseFloat(document.getElementById("fInput").value) <= 50){
			document.getElementById("weatherImage").src = "images/cool.png";
		}
		else{
			document.getElementById("weatherImage").src = "images/warm.png";
		}
   })
   
   //event listener to clear F when user inputs value into C
   document.getElementById("cInput").addEventListener("input", function(){
	   document.getElementById("fInput").value = "";
   })

	//event listener to clear C when user inputs value into F
   document.getElementById("fInput").addEventListener("input", function(){
	   document.getElementById("cInput").value = "";
   })
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * (9/5) + 32);
}

function convertFtoC(degreesFahrenheit) {
   return ((degreesFahrenheit-32) * (5/9));
}
