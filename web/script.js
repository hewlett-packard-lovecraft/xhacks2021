function up_date() {
	document.getElementById('date').innerHTML = "It is currently " + new Date()
}

up_date(); // Call it once before the loop starts

var interval = setInterval(up_date, 1000);