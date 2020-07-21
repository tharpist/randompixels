
//Global variable
var canvas = document.createElement("canvas");

//hex generator function
function hexGen() {
var string = "#" + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);


	return string;
}

//creates random pixels with height and width
function makeCanvas(){
	//alert("TEST");
	//var theDIV = document.getElementById("picture");
	var ctx = canvas.getContext("2d");
    var x, y = 0;

	canvas.width = screen.width;
	canvas.height = screen.height;
	
	
	for(;y < canvas.height; y++) {
		for(x = 0; x < canvas.width; x++) {
			ctx.fillStyle = hexGen();
			ctx.fillRect(x, y, 1, 1);
		}
	}
	document.getElementById("picture").appendChild(canvas);
    return canvas;
}

//JQUERY quote blinker
(function() {

    var quotes = $(".fade");
    function textBlink() {
        quotes
            .fadeIn(2090)
            .delay(1000)
            .fadeOut(2000, textBlink);
    }
    
    textBlink();
    
})();
    
	
	
	
//remakes canvas on click         
 document.body.onclick = function runProgram(){
     document.getElementById("picture").removeChild(canvas);
     makeCanvas();
		
		//location.reload();
	}


 makeCanvas();