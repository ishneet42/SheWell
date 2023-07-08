console.log("Welcome To Spotify");

//initialise the variables
let songIndex = 0;
// let Index = 0;
let audioElement = new Audio('songs/11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Heart Of The Ocean " , filePath:"songs/1.mp3" , coverPath: "covers/cover1.jpg"},
    {songName: "Late At Night" , filePath: "songs/2.mp3" , coverPath: "covers/cover1.jpg"},
    {songName: "Morning Routine" , filePath: "songs/3.mp3" , coverPath: "covers/cover1.jpg"},
    {songName: "Purple Cat" , filePath: "songs/4.mp3" , coverPath: "covers/cover1.jpg"},
    {songName: "Storm Clouds" , filePath: "songs/5.mp3" , coverPath: "covers/cover1.jpg"},
    {songName: "Winter Night" , filePath: "songs/6.mp3" , coverPath: "covers/cover1.jpg"},
    
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate' , ()=>{
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id); 
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
