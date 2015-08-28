function GetValue () {
		var myarray= new Array("Dive Bomber Push Up", "Goblet Squat", "Calf Raises", "Decline Push Up", "Chin Ups", "Decline Plank", "Squat Jump", "Downward Dog", "Hammer Curls", "Cobra Pose", "Chest Press", "Step Ups", "Pistol Squat", "Hanging Leg Raises", "Shoulder Push Ups", "Parallel Grip Pull Ups") ;
		var random = myarray[Math.floor(Math.random() * myarray.length)];
		document.getElementById("fill").innerHTML=random;
		}