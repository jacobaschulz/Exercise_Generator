function GetValue () {
		var myarray= new Array("Deadlift", "Overhead Press", "Front Squat", "Bench Press", "Back Squat", "Romanian Deadlift", "Clean and Jerk", "Push Press", "Sumo Deadlift", "Bulgarian Split Squat", "Pull Up", "Push Up", "Chin Up") ;
		var random = myarray[Math.floor(Math.random() * myarray.length)];
		document.getElementById("fill").innerHTML=random;
		}
