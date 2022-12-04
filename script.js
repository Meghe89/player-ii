let tracks = [
    {   url : './audio/ACDC - Thunderstruck.mp3' ,
    cover : './cover/cover acdc.jpg', artist : 'ACDC' , title : 'Thunderstruck', id : 1},  
    {   url : './audio/Green Day - Boulevard of Broken Dreams.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'Boulevard Of Broken Dreams', id: 2},
    {   url : './audio/Guns n  Roses - Sweet Child O Mine.mp3' ,
    cover : './cover/cover apetite for descruction.jpg', artist : `GUNS N' ROSES` , title : `Sweet Child O' Mine`, id: 3},
    {   url : './audio/Maneskin - Amandoti.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Amandoti', id : 4},
    {   url : `./audio/Gloria Gaynor - I Will Survive.mp3` ,
    cover : './cover/cover love tracks.jpg', artist : 'GLORIA GAYNOR' , title : `I Will Survive`, id : 5},
    {   url : './audio/ACDC - Shoot to Thrill.mp3' ,
    cover : './cover/cover back in black.jpg', artist : 'ACDC' , title : 'Shoot to Thrill', id : 6},
    {   url : './audio/Green Day - Holiday.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'Holiday', id: 7},
    {   url : `./audio/Guns N Roses - Don't Damn Me.mp3` ,
    cover : './cover/cover use your illusion.jpg', artist : `GUNS N'ROSES` , title : `Don't Damn Me`, id: 8},
    {   url : './audio/Pink Floyd - Another Brick In The Wall.mp3' ,
    cover : './cover/cover the wall.jpg', artist : 'PINK FLOYD' , title : 'Another Brick In The Wall', id: 9},
    {   url : './audio/All American Rejects - Gives You Hell.mp3' ,
    cover : './cover/cover When The World Comes Down.jpg', artist : 'ALL AMERICAN REJECTS' , title : 'Gives You Hell', id: 10},
    {   url : './audio/Måneskin - Chosen.mp3' ,
    cover : './cover/cover chosen.jpg', artist : 'MANESKIN' , title : 'Chosen', id: 11},
    {   url : './audio/Placebo - Every Me And Every You.mp3' ,
    cover : `./cover/cover without you i'm nothing.jpg`, artist : 'PLACEBO' , title : 'Every Me And Every You', id: 12},
    {   url : './audio/Måneskin - Supermodel.mp3',
    cover : './cover/cover Supermodel.jpg', artist: 'MANESKIN',  title : 'Supermodel', id: 13},
    {   url : './audio/Queen - Fat Bottomed Girls.mp3',
    cover : './cover/cover jazz.jpg', artist: 'QUEEN',  title : 'Fat Bottomed Girls', id:14},
    {   url : './audio/Jeff Buckley - Grace.mp3' ,
    cover : './cover/cover grace.jpg', artist : 'JEFF BUCKLEY' , title : 'Grace', id:15},
    {   url : './audio/Muse - Hysteria.mp3' ,
    cover : './cover/cover absolution.jpg', artist : 'MUSE' , title : 'Hysteria', id:16},
    {   url : './audio/Guns N Roses- Dont Cry (Alt Version).mp3' ,
    cover : './cover/cover use your illusion 2.jpg', artist : `GUNS N' ROSES` , title : `Don't Cry (Alt)`, id:17},
    {   url : './audio/Omnia - Free Ra Huri.mp3' ,
    cover : './cover/cover Musick and Poëtree.jpg', artist : 'OMNIA' , title : 'Free Ra Huri', id: 18},
    {   url : './audio/Guns N Roses - Paradise City.mp3' ,
    cover : './cover/cover apetite for descruction.jpg', artist : `GUNS N' ROSES` , title : 'Paradise City', id:19},
    {   url : '/audio/Elton John - Rocket Man.mp3' ,
    cover : './cover/Cover Honky Chateau.jpg', artist : 'ELTON JOHN' , title : 'Rocket Man', id:20},
    {   url : `./audio/Red Hot Chili Peppers - Shes Only 18.mp3` ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : `She's Only 18`, id:21},
    {   url : `./audio/Slash, Derek Sherinian, Billy Idol - In the Summertime!.mp3` ,
    cover : './cover/cover in the summertime.jpg', artist : 'SLASH, BILLY IDOL' , title : `In the Summertime`, id:22},
    {   url : './audio/Placebo - Running Up That Hill.mp3' ,
    cover : './cover/cover Sleeping with Ghosts.jpg', artist : 'PLACEBO' , title : 'Running Up That Hill', id:23},
    {   url : './audio/Maneskin - I Wanna Be Your Slave.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : `I Wanna Be Your Slave`, id:24},
    {   url : `./audio/4 Non Blondes - What's Up .mp3` ,
    cover : './cover/cover bigger.jpg', artist : '4 NON BLONDES' , title : `What's Up`, id:25},
    {   url : './audio/Guns n Roses - Dont Cry.mp3' ,
    cover : './cover/cover use your illusion.jpg', artist : `GUNS N' ROSES` , title : `Don't Cry`, id:26},
    {   url : './audio/Måneskin - Coraline.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Coraline', id:27},
    {   url : './audio/Beatles - Let It Be.mp3' ,
    cover : './cover/cover Let It Be.jpg', artist : 'BEATLES' , title : 'Let It Be', id:28},
    {   url : './audio/David Bowie - Heroes Lyrics.mp3' ,
    cover : './cover/cover heroes.jpg', artist : 'DAVID BOWIE' , title : 'Heroes', id:29},
    {   url : './audio/Green Day - Stray Heart.mp3' ,
    cover : './cover/cover ¡dos!.jpg', artist : 'GREEN DAY' , title : 'Stray Heart', id:30},
    {   url : './audio/Kate Bush - Running Up That Hill (A Deal With God).mp3' ,
    cover : './cover/cover hunds of love.jpg', artist : 'KATE BUSH' , title : 'Running Up That Hill (A Deal With God)', id:31},
    {   url : 'audio/Pink Floyd - Comfortably Numb.mp3' ,
    cover : './cover/cover the wall.jpg', artist : 'PINK FLOYD' , title : 'Comfortambly Numb', id:32},
    {   url : './audio/Red Hot Chili Peppers - Tell Me Baby.mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Tell Me Baby', id:33},
    {   url : './audio/Queen - Bohemian Rhapsody.mp3' ,
    cover : './cover/cover a night at the opera.jpg', artist : 'QUEEN' , title : 'Bohemian Rhapsody', id:34},
    {   url : './audio/Green Day - Wake Me Up When September Ends.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'Wake Me Up When September Ends', id:35},
    {   url : './audio/Red Hot Chili Peppers - Dani California.mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Dani California', id:36},
    {   url : './audio/Guns N Roses - November Rain.mp3' ,
    cover : './cover/cover use your illusion.jpg', artist : `GUNS N' ROSES` , title : 'November Rain', id:37},
    {   url : './audio/Green Day - 21 Guns.mp3' ,
    cover : './cover/cover 21st Century Breakdown.jpg', artist : 'GREEN DAY' , title : '21 Guns', id:38},
    {   url : `./audio/Queen - Don't Stop Me Now.mp3` ,
    cover : './cover/cover jazz.jpg', artist : 'QUEEN' , title : `Don't Stop Me Now`, id: 39},
    {   url : './audio/Red Hot Chili Peppers - Scar Tissue.mp3' ,
    cover : './cover/cover californication.jpg', artist : 'RHCP' , title : 'Scar Tissue', id:40},
    {   url : `./audio/Guns n Roses - Knockin' on Heaven's Door.mp3` ,
    cover : './cover/cover use your illusion 2.jpg', artist : `GUNS N' ROSES` , title : `Knockin' on Heaven's Door`, id:41},
    {   url : './audio/Måneskin - Vent Anni.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : `Vent' Anni`, id:42},
    {   url : './audio/Red Hot Chili Peppers - Stadium Arcadium.mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Stadium Arcadium', id:43},
    {   url : '/audio/Nirvana - Smells Like Teen Spirit.mp3' ,
    cover : './cover/cover nevermind.jpg', artist : 'NIRVANA' , title : ' Smells Like Teen Spirit', id:44},
    {   url : './audio/Maneskin - Torna A Casa.mp3' ,
    cover : './cover/cover il ballo della vita.jpg', artist : 'MANESKIN' , title : `Torna A Casa`, id:45},
    {   url : './audio/Queen - Radio Ga Ga.mp3' ,
    cover : './cover/cover the works.jpg', artist : 'QUEEN' , title : 'Radio Ga Ga', id:46},
    {   url : './audio/Green Day - American Idiot.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'American Idiot', id:47},    
    {   url : 'audio/Pink Floyd - Wish You Were Here.mp3',
    cover : './cover/cover whish you where here.jpg', artist : 'PINK FLOYD' , title : 'Whish You Where Here', id:48},
    {   url : '/audio/Green Day - Time of Your Life(Good Riddance).mp3' ,
    cover : './cover/cover nimrod.jpg', artist : 'GREEN DAY' , title : 'Time Of Your Life (Good Riddance)', id:49},    
    {   url : './audio/Kiss - Rock and Roll all Night.mp3' ,
    cover : './cover/cover dressed to kill.jpg', artist : 'KISS' , title : 'Rock And Roll All Night', id:50},
    {   url : './audio/Kiss - Detroit Rock City.mp3' ,
    cover : './cover/cover destroyer.jpg', artist : 'KISS' , title : 'Detroit Rock City', id:51},
    {   url : './audio/Kiss - I Was Made For Loving You.mp3' ,
    cover : './cover/cover dynasty.jpg', artist : 'KISS' , title : 'I Was Made For Loving You', id:52},
    {   url : './audio/Red Hot Chili Peppers - Snow (Hey-oh).mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Snow (Hey-oh)', id:53},
    {   url : './audio/Manesktin - The Loneliest.mp3' ,
    cover : './cover/cover rush.jpg', artist : 'MANESKIN' , title : 'The Loneliest', id:54},
    {   url : './audio/Maneskin - Zitti E Buoni.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Zitti E Buoni', id:55},
]

/* btns */
const plailystBtn = document.querySelector('#playlist-btn');
const playBtn = document.querySelector('#play-btn');
const pauseBtn = document.querySelector('#pause-btn');
const rightBtn = document.querySelector('#right-btn');
const leftBtn = document.querySelector('#left-btn');
const shuffleBtn = document.querySelector('#shuffle-btn');
const searchBtn = document.querySelector('.fa-napster');
const searchInput = document.querySelector('#search-input');

/* track */
const playlist = document.querySelector('.playlist');
const search = document.querySelector('.search');
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
let totalTracks = tracks.length
let random = false;
let volume = track.volume;
let grabbedVol = false;


/* FUNCTIONS */

function populateTrackList(tracks,side) {
    tracks.forEach((track)=>{
        let card = document.createElement('div');
        card.innerHTML = '';
        
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
        
        <i data-track="${track.id -1}" id="playlist-play" class="fa-solid fa-circle-play tc-blue playlist-id fa-3x"></i>
        <i id="playlist-pause" class="fa-solid fa-circle-pause tc-blue fa-3x "></i>
        
        </div
        `
        side.appendChild(card);
    });
    
    let playBtns = document.querySelectorAll('.playlist-id');
    playBtns.forEach(btn=>btn.addEventListener('click', ()=>{
        let selectedTrack = btn.getAttribute('data-track');
        currentTrack = selectedTrack;
        changeTrackDetails();
        changePlaylistActive();
        sidebarsRemove();
        if(playing ){
            play()
        }
        if (!playing) {
            play()
        }        
    }))
}

function changePlaylistActive(){
    let trackListCards = document.querySelectorAll('.track-card');
    trackListCards.forEach((card, index)=>{
        if(index == currentTrack){
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    })
}


function playlistToggle() {
    playlist.classList.toggle('playlist-toggle');
    search.classList.remove('search-toggle');
}

function searchToggle() {
    searchInput.value = '';
    playlist.classList.remove('playlist-toggle');
    search.classList.toggle('search-toggle');
    
    emptySearchCard();
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
        //al click su random si deve popolare un array con le canzoni mescolate
    }
    
    if (currentTrack > tracks.length -1) {
        currentTrack = 0
    }
    
    changeTrackDetails()
    controlPlaying() 
    changePlaylistActive()
    sidebarsRemove();
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
    sidebarsRemove();
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
    if (str.length < 5){
        return str
    } else {
        return str.substr(0, 5) + '...';
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
    if (search.classList.length = 3) {
        if (ev.code === 'Space') {
            play()
        }        
    }
    if (ev.code === 'ArrowRight') {
        next()
    }
    if (ev.code === 'ArrowLeft') {
        prev()
    }
}

function sidebarsRemove() {
    playlist.classList.remove('playlist-toggle');
    search.classList.remove('search-toggle');
    searchInput.value = '';
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
    grabbedVol = true;
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
searchBtn.addEventListener('click', searchToggle)
rightBtn.addEventListener('click', next);
leftBtn.addEventListener('click', prev);
track.addEventListener('ended', next)
shuffleBtn.addEventListener('click', randomTrack);
songLength.addEventListener('click', setProgress)
window.addEventListener('keydown', buttonsEvents);

volumeIcon.addEventListener('click', checkVolume);
volumeBtn.addEventListener('wheel', volumeWheel);


/* CALL FUNCTIONS */
populateTrackList(tracks,playlist)
changePlaylistActive()
changeTrackDetails()
updateVolumeCursor()



/* select track from sidebar */

searchInput.addEventListener('input' , (e)=>{    
    if (e.target.value.length == 3) {        
        let searched = e.target.value;
        
        let artist = tracks.filter(track=>track.artist.toLowerCase().includes(searched.toLowerCase()));
        let title = tracks.filter(track=>track.title.toLowerCase().includes(searched.toLowerCase()));
        
        if (search.children.length == 1) {
            populateTrackList(title,search);
            populateTrackList(artist,search);
        }
        searchInput.removeEventListener('input', (e))
    } else if (e.target.value.length < 3) {
        emptySearchCard();    
    }
})

function emptySearchCard() {
    let children = search.children;
    Array.from(children).forEach(children=>{        
        if (children.className == 'track-playlist') {
            children.remove();
        }
    })
}
