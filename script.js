var audio=document.getElementById("myaudio");
var audio1=document.getElementById("myaudio1");
var audio2=document.getElementById("myaudio2");
var audio3=document.getElementById("myaudio3");

var first=document.getElementById("first");
var second=document.getElementById("second");
var tmp=first.src;

function main(){
    audio.play();
first.src="https://cdn-icons-png.flaticon.com/128/6529/6529049.png";
}
{if (audio1.play){audio1.pause();} }

function stop(){audio.pause()
;first.src="https://cdn-icons-png.flaticon.com/128/8029/8029490.png"
paused.png="none"

}
//{if (audio1.play){audio1.pause();} } 
function main1(){
    audio1.play();
first.src="https://cdn-icons-png.flaticon.com/128/6529/6529049.png";


}
function stop1(){audio1.pause()
;first.src="https://cdn-icons-png.flaticon.com/128/8029/8029490.png"
paused.png="none"

}function main2(){
    audio2.play();
first.src="https://cdn-icons-png.flaticon.com/128/6529/6529049.png";


}
function stop2(){audio2.pause()
;first.src="https://cdn-icons-png.flaticon.com/128/8029/8029490.png"
paused.png="none"

}
function main3(){
    audio3.play();
first.src="https://cdn-icons-png.flaticon.com/128/6529/6529049.png";


}
function stop3(){audio3.pause()
;first.src="https://cdn-icons-png.flaticon.com/128/8029/8029490.png"
paused.png="none"

}
function searchclick(){
    document.getElementById('homediv')
    .style.display='none';
    document.getElementById('searchdiv')
    .style.display='block'

}
function homeclick(){
    document.getElementById('homediv')
    .style.display='block';
    document.getElementById('searchdiv')
    .style.display='none'}
function secondsToMinutesSeconds(second){
    if (isNaN(second) || second<0){return "00:00";}
    const minutes=Math.floor(seconds / 60);
    const remainingSeconds=Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2,'0');
    const formettedSeconds = String(remainingSeconds).padStart(2,'0');
    return '${formettedMinutes}:${formettedSeconds}';

}




// Add an event listener to seekbar
document.querySelector(".bar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    myaudio.currentTime = ((myaudio.duration) * percent) / 100
})

// Add an event listener for hamburger
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0"
})

// Add an event listener for close button
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%"
})

// Add an event listener to previous
previous.addEventListener("click", () => {
    myaudio.pause()
    console.log("Previous clicked")
    let index = songs.indexOf(myaudio.src.split("/").slice(-1)[0])
    if ((index - 1) >= 0) {
        playMusic(songs[index - 1])
    }
})

// Add an event listener to next
next.addEventListener("click", () => {
    myaudio.pause()
    console.log("Next clicked")

    let index = songs.indexOf(myaudio.src.split("/").slice(-1)[0])
    if ((index + 1) < songs.length) {
        playMusic(songs[index + 1])
    }
})

// Add an event to volume
document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    console.log("Setting volume to", e.target.value, "/ 100")
    myaudio.volume = parseInt(e.target.value) / 100
    if (myaudio.volume >0){
        document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
    }
})

// Add event listener to mute the track
document.querySelector(".volume>img").addEventListener("click", e=>{ 
    if(e.target.src.includes("volume.svg")){
        e.target.src = e.target.src.replace("volume.svg", "mute.svg")
        myaudio.volume = 0;
        document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
    }
    else{
        e.target.src = e.target.src.replace("mute.svg", "volume.svg")
        myaudio.volume = .10;
        document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
    }

})






    