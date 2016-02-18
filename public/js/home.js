var colors = ["#1d3649", "#0A3C02", "#003C32", "#412356", 
			  "#601146", "#6E0A1E", "#6D120F", "#3C3200", 
			  "#2D3737", "#3C3232"];

var idx = Math.floor(Math.random() * colors.length);
document.getElementById("home").style.backgroundColor = colors[idx];

