// console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Bad-liar", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Awara saam h", filePath: "2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Banja Tu meri ranni", filePath: "3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hamdard", filePath: "4.mp3", coverPath: "covers/4.jpg"},
    {songName: "haye tauba", filePath: "5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Hua h aaj pahli baar", filePath: "6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Lies-NCS", filePath: "7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mere rashke qamar", filePath: "8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Fearless -NCS", filePath: "9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Photo", filePath: "10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Suna h - jubin nau..", filePath: "11.mp3", coverPath: "covers/10.jpg"},
    {songName: "Let me love u", filePath: "12.mp3", coverPath: "covers/10.jpg"},
    {songName: "Suit tera evergreen", filePath: "13.mp3", coverPath: "covers/10.jpg"},
    {songName: "banda bnja", filePath: "14.mp3", coverPath: "covers/10.jpg"}
]

songItems.forEach((element, i)=>{ 
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 

    
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=13){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
  
