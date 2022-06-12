let tracks = [
    {   url : './audio/ACDC - Thunderstruck.mp3' ,
    cover : './cover/cover acdc.jpg', artist : 'ACDC' , title : 'Thunderstruck', id: 1},
    {   url : './audio/Green Day - Boulevard of Broken Dreams.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'Boulevard Of Broken Dreams'},
    {   url : './audio/Guns n  Roses - Sweet Child O Mine.mp3' ,
    cover : './cover/cover apetite for descruction.jpg', artist : `GUNS N' ROSES` , title : `Sweet Child O' Mine`},
    {   url : './audio/Maneskin - Amandoti.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Amandoti'},
    {   url : './audio/ACDC - Shoot to Thrill.mp3' ,
    cover : './cover/cover back in black.jpg', artist : 'ACDC' , title : 'Shoot to Thrill'},
    {   url : './audio/Green Day - Holiday.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'Holiday'},
    {   url : './audio/Pink Floyd - Another Brick In The Wall.mp3' ,
    cover : './cover/cover the wall.jpg', artist : 'PINK FLOYD' , title : 'Another Brick In The Wall'},
    {   url : './audio/All American Rejects - Gives You Hell.mp3' ,
    cover : './cover/cover When The World Comes Down.jpg', artist : 'ALL AMERICAN REJECTS' , title : 'Gives You Hell'},
    {   url : './audio/Måneskin - Chosen.mp3' ,
    cover : './cover/cover chosen.jpg', artist : 'MANESKIN' , title : 'Chosen'},
    {   url : './audio/Placebo - Every Me And Every You.mp3' ,
    cover : `./cover/cover without you i'm nothing.jpg`, artist : 'PLACEBO' , title : 'Every Me And Every You'},
    {   url : './audio/Måneskin - Supermodel.mp3',
    cover : './cover/cover Supermodel.jpg', artist: 'MANESKIN',  title : 'Supermodel'},
    {   url : './audio/Jeff Buckley - Grace.mp3' ,
    cover : './cover/cover grace.jpg', artist : 'JEFF BUCKLEY' , title : 'Grace'},
    {   url : './audio/Muse - Hysteria.mp3' ,
    cover : './cover/cover absolution.jpg', artist : 'MUSE' , title : 'Hysteria'},
    {   url : './audio/Omnia - Free Ra Huri.mp3' ,
    cover : './cover/cover Musick and Poëtree.jpg', artist : 'OMNIA' , title : 'Free Ra Huri'},
    {   url : '/audio/Elton John - Rocket Man.mp3' ,
    cover : './cover/Cover Honky Chateau.jpg', artist : 'ELTON JOHN' , title : 'Rocket Man'},
    {   url : `./audio/Red Hot Chili Peppers - Shes Only 18.mp3` ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : `She's Only 18`},
    {   url : './audio/Maneskin - I Wanna Be Your Slave.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : `I Wanna Be Your Slave`},
    {   url : `./audio/4 Non Blondes - What's Up .mp3` ,
    cover : './cover/cover bigger.jpg', artist : '4 NON BLONDES' , title : `What's Up`},
    {   url : './audio/Guns n Roses - Dont Cry.mp3' ,
    cover : './cover/cover use your illusion.jpg', artist : `GUNS N' ROSES` , title : `Don't Cry`},
    {   url : './audio/Måneskin - Coraline.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Coraline'},
    {   url : './audio/Beatles - Let It Be.mp3' ,
    cover : './cover/cover Let It Be.jpg', artist : 'BEATLES' , title : 'Let It Be'},
    {   url : './audio/Green Day - Stray Heart.mp3' ,
    cover : './cover/cover ¡dos!.jpg', artist : 'GREEN DAY' , title : 'Stray Heart'},
    {   url : 'audio/Pink Floyd - Comfortably Numb.mp3' ,
    cover : './cover/cover the wall.jpg', artist : 'PINK FLOYD' , title : 'Comfortambly Numb'},
    {   url : './audio/Red Hot Chili Peppers - Tell Me Baby.mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Tell Me Baby'},
    {   url : './audio/Green Day - Wake Me Up When September Ends.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'Wake Me Up When September Ends'},
    {   url : './audio/Red Hot Chili Peppers - Dani California.mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Dani California'},
    {   url : './audio/Green Day - 21 Guns.mp3' ,
    cover : './cover/cover 21st Century Breakdown.jpg', artist : 'GREEN DAY' , title : '21 Guns'},
    {   url : './audio/Red Hot Chili Peppers - Scar Tissue.mp3' ,
    cover : './cover/cover californication.jpg', artist : 'RHCP' , title : 'Scar Tissue'},
    {   url : `./audio/Guns n Roses - Knockin' on Heaven's Door.mp3` ,
    cover : './cover/cover use your illusion 2.jpg', artist : `GUNS N' ROSES` , title : `Knockin' on Heaven's Door`},
    {   url : './audio/Måneskin - Vent Anni.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : `Vent' Anni`},
    {   url : './audio/Red Hot Chili Peppers - Stadium Arcadium.mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Stadium Arcadium'},
    {   url : 'audio/Pink Floyd - Wish You Were Here.mp3',
    cover : './cover/cover whish you where here.jpg', artist : 'PINK FLOYD' , title : 'Whish You Where Here'},
    {   url : './audio/Maneskin - Torna A Casa.mp3' ,
    cover : './cover/cover il ballo della vita.jpg', artist : 'MANESKIN' , title : `Torna A Casa`},
    {   url : './audio/Queen - Radio Ga Ga.mp3' ,
    cover : './cover/cover the works.jpg', artist : 'QUEEN' , title : 'Radio Ga Ga'},
    {   url : './audio/Green Day - American Idiot.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'American Idiot'},    
    {   url : './audio/Maneskin - Zitti E Buoni.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Zitti E Buoni'},
   
]


/* SELECTORS */

/* btns */
const plailystBtn = document.querySelector('#playlist-btn');
const playBtn = document.querySelector('#play-btn');
const pauseBtn = document.querySelector('#pause-btn');
const rightBtn = document.querySelector('#right-btn');
const leftBtn = document.querySelector('#left-btn');
const shuffleBtn = document.querySelector('#shuffle-btn');


/* track */
const playlist = document.querySelector('.playlist');
const circleCd = document.querySelector('.circle-cd');
let track = document.querySelector('#track');
const trackArtist = document.querySelector('#track-artist')
const trackTitle = document.querySelector('#track-title')
const trackCover = document.querySelector('#track-cover');
const backgroundImage = document.querySelector('#background-image');

/* volume */
const volumeBtn = document.querySelector('#volume-btn');
const volumeBar = document.querySelector('#volume-bar');
const volumeIcon = document.querySelector('#volume-icon');
const volumeSlider = document.querySelector('#volume-slider');
const volumeCursor = document.querySelector('#volume-cursor');
const volumeCursorHandle = document.querySelector('#volume-cursor');




/* time */
const currentTime = document.querySelector('#current-time');
const timeLeft = document.querySelector('#time-left');
const songCurrent = document.querySelector('.song-current');
const songLength = document.querySelector('.song-length');

/* variabili globali per traccia */
let playing = false;
let currentTrack = 0;
let random = false;
let volume = track.volume;
let grabbedVol = false;


/* FUNCTIONS */

function populateTrackList() {
    tracks.forEach((track, index)=>{
        let card = document.createElement('div');

        card.classList.add('track-playlist');
        card.innerHTML = 
        `
        <div class="track-card">
            <div class="mini-cd ">
                <img class="thumbnail ml-3" src="${track.cover}" alt="copertina">
            </div>
            <div class="playlist-title">
                <span class="tc-green track-artist font-cursive">${track.artist}</span>
                <span class="tc-accent font-cursive">${track.title}</span>
            </div>
            
                <i data-track="${index}" id="playlist-play" class="fa-solid fa-circle-play tc-blue playlist-id fa-3x"></i>
                <i id="playlist-pause" class="fa-solid fa-circle-pause tc-blue fa-3x "></i>
            
            </div
        `
        playlist.appendChild(card);
    });

    let playBtns = document.querySelectorAll('.playlist-id')
    .forEach(btn=>btn.addEventListener('click', ()=>{
        let selectedTrack = btn.getAttribute('data-track');
        currentTrack = selectedTrack;
        changeTrackDetails()
        changePlaylistActive()
        if(playing ){
            play()
        }
        if (!playing) {
            play()
        } 
       
    }))
}

function changePlaylistActive(){
    let trackListCards = document.querySelectorAll('.track-card')
    .forEach((card, index)=>{
        if(index == currentTrack){
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    })
}


function playlistToggle() {
    playlist.classList.toggle('playlist-toggle')
}


function play() {
    if (!playing) {
        playBtn.classList.add('d-none')
        pauseBtn.classList.remove('d-none');
        circleCd.classList.add('active');
        track.play();
        playing = true;
    } else {
        playBtn.classList.remove('d-none');
        pauseBtn.classList.add('d-none');
        circleCd.classList.remove('active');
        track.pause();
        playing = false;
    }
}

function next() {
    if (!random) {
        currentTrack++        
    } else {
        currentTrack = [Math.floor(Math.random() * tracks.length)]
    }

    if (currentTrack > tracks.length -1) {
        currentTrack = 0
    }
    
        
    changeTrackDetails()
    controlPlaying() 
    changePlaylistActive()
    
}

function prev() {
    if (!random) {
        currentTrack--        
    } else {
        currentTrack = [Math.floor(Math.random() * tracks.length)]
    }

    if (currentTrack < 0) {
        currentTrack = tracks.length -1
    }

   
    
    changeTrackDetails()
    controlPlaying()
    changePlaylistActive()
}

function controlPlaying() {
    if (playing) {
        playing = false;
        play()
    }
}



setInterval(function() {    
   currentTime.innerHTML = formatTime(track.currentTime)
   timeLeft.innerHTML = formatTime(track.duration-track.currentTime);   
   updateProgress()
},900)


function formatTime(sec){
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if(seconds <10){
        seconds = `0${seconds}`;
    }
    return `${minutes}.${seconds}`;
}

function truncateTitle(str) {
    if (str.length < 6){
        return str
    } else {
        return str.substr(0, 6) + '...'
    }
}

function changeTrackDetails() {
    track.src = tracks[currentTrack].url;
    trackArtist.innerHTML = truncateTitle(tracks[currentTrack].artist);
    trackTitle.innerHTML = tracks[currentTrack].title;
    trackCover.src = tracks[currentTrack].cover
    backgroundImage.src = tracks[currentTrack].cover
    
}

function randomTrack() {
    shuffleBtn.classList.toggle('active')
    if (!random) {
        random = true
    } else {
        random = false
    }
}

function updateProgress() {
    let progressPercent = parseFloat((track.currentTime / track.duration) * 100).toFixed(2);    
   
    songCurrent.style.width = `${progressPercent}%`    
}

function setProgress(e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = track.duration;
    
    track.currentTime = (clickX / width) * duration;
    
}

function buttonsEvents(ev) {
    if (ev.code === 'Space') {
        play()
    }
    if (ev.code === 'ArrowRight') {
        next()
    }
    if (ev.code === 'ArrowLeft') {
        prev()
    }
}

function sidebarPlay() {
    playlistToggle()       
}

function updateVolumeCursor() {
    volumeCursor.style.height = (100 - track.volume * 100) + '%';
    if(track.volume >= 0.50) {volumeIcon.className = "fas fa-volume-up"} else
    if(track.volume > 0.00) {volumeIcon.className = "fas fa-volume-down"} else
    if(track.volume == 0.00) {volumeIcon.className = "fas fa-volume-mute"}
}

function grabVolHandle(e) {
    grabbedVol = true;
    let x = e.offsetY;
    console.log(x);
}

function checkVolume() {
    if (track.volume) {
        track.volume = 0;
        updateVolumeCursor()
    } else{
        track.volume = volume;
        updateVolumeCursor()
    }
}

function volumeWheel(ev) {
    if (((track.volume + ev.wheelDeltaY*0.0001) <= 1) && ((track.volume + ev.wheelDeltaY*0.0001) >= 0)) {
       track.volume += ev.wheelDeltaY*0.0001
       if (track.volume < 0.05) {
           track.volume = 0
       }
       volume = track.volume;
       updateVolumeCursor();
    }
}
function releaseVolHandle(e) {
    grabbedVol = false;
}
function grabVolHandle(e) {
    grabbedVol = true
    let x = e.offsetY;
    if (x > 90) track.volume = 0
    if (x-6 <= 85 && x-6 >= 0) {
        if (x-6>=84){
            track.volume = 0
        }
        if (x-6 <= 1){
            track.volume = 1
        }
        let position = ((-1 * (x-6)) / volumeSlider.offsetHeight) + 1
        
        track.volume = position
        updateVolumeCursor()
    }
}

function dragVolHandle(e){
    if(grabbedVol){

        let x = e.offsetY
        let position = ((-1 * (x)) / volumeBar.offsetHeight) + 1
        
        if (position<0.05){
            track.volume = 0
        } else if (position >0.95){
            track.volume = 1
        } else{
            track.volume = position;
        }
        updateVolumeCursor()
       
    }

}

/* LISTENERS */
playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', play);
plailystBtn.addEventListener('click', playlistToggle);
rightBtn.addEventListener('click', next);
leftBtn.addEventListener('click', prev);
track.addEventListener('ended', next)
shuffleBtn.addEventListener('click', randomTrack);
songLength.addEventListener('click', setProgress)
window.addEventListener('keydown', buttonsEvents);

volumeIcon.addEventListener('click', checkVolume);
volumeBtn.addEventListener('wheel', volumeWheel);


/* CALL FUNCTIONS */
populateTrackList()
changePlaylistActive()
changeTrackDetails()
updateVolumeCursor()



/* select track from sidebar */
const playlistPlay = document.querySelectorAll('#playlist-play');



playlistPlay.forEach((btn)=>{
    btn.addEventListener('click', sidebarPlay)
    
})



