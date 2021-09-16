function typeOfClock(){
	const check = document.getElementById('accept');
	console.log(check.checked);

	if(check.checked){
		document.querySelector('.digital-clock').style.display = 'none';
		document.querySelector('.analog-clock').style.display = 'flex';
	}
	else{
		document.querySelector('.digital-clock').style.display = 'flex';
		document.querySelector('.analog-clock').style.display = 'none';
	}
}

function showTimeAnalog(){
	var date = new Date();
	var hours = date.getHours(); 
	var mins = date.getMinutes(); 
	var seconds = date.getSeconds(); 

	const minsHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');
	const secondHand = document.querySelector('.second-hand');
	
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hourDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	setInterval(showTimeAnalog, 1000);
}

function showTimeDigital(){
		var date = new Date();
		var hours = date.getHours();
		var mins = date.getMinutes(); 
		var seconds = date.getSeconds(); 
		var session = "AM";
		
		if(hours == 0){
				hours = 12;
		}
		
		if(hours > 12){
				hours = hours - 12;
				session = "PM";
		}
		
		hours = (hours < 10) ? "0" + hours : hours;
		mins = (mins < 10) ? "0" + mins : mins;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		
		var time = hours + ":" + mins + ":" + seconds + " " + session;
		document.getElementById("clockDisplay").innerText = time;
		document.getElementById("clockDisplay").textContent = time;
		
		setTimeout(showTimeDigital, 1000);
}