var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var val = document.querySelector("#slider").value;
	volume.innerHTML = (val + "%");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.95 * video.playbackRate;
	console.log("New speed is "+video.playbackRate );
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.95;
	console.log("New speed is "+video.playbackRate );
});

document.querySelector("#skip").addEventListener("click", function() {

	console.log("Original location " + video.currentTime);

	if((video.currentTime + 15) > video.duration) {
		video.currentTime = 0;
		console.log("Going back to the beginning");
		console.log("New location " + video.currentTime);
	}
	else {
		video.currentTime = video.currentTime + 15;
		console.log("New location " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
 	}
	else {
		video.muted = false; 
		document.querySelector("#mute").innerHTML = "Mute";
	}

});

document.querySelector("#slider").addEventListener("click", function() {
	var val = document.querySelector("#slider").value;
	video.volume = val/100;
	volume.innerHTML = (val + "%");
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});