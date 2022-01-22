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
    {   url : './audio/Jeff Buckley - Grace.mp3' ,
    cover : './cover/cover grace.jpg', artist : 'JEFF BUCKLEY' , title : 'Grace'},
    {   url : './audio/Muse - Hysteria.mp3' ,
    cover : './cover/cover absolution.jpg', artist : 'MUSE' , title : 'Hysteria'},
    {   url : './audio/Omnia - Free Ra Huri.mp3' ,
    cover : './cover/cover Musick and Poëtree.jpg', artist : 'OMNIA' , title : 'Free Ra Huri'},
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

/* ASSOCIAZIONE DOM */
/* funzionalità */
let playBtn = document.querySelector('#play-btn')
let pauseBtn = document.querySelector('#pause-btn')
let prevBtn = document.querySelector('#prev-btn')
let nextBtn = document.querySelector('#next-btn')
let sidebarToggler = document.querySelector('#sidebar-toggle')
/* dettagli canzone */
let trackArtist = document.querySelector('#track-artist')
let trackTitle = document.querySelector('#track-title')
let trackCover = document.querySelector('#track-cover')
let currentTime = document.querySelector('#current-time')
let totalTime = document.querySelector('#total-time')
let track = document.querySelector('#track')


//query prese da Davide
let volumeBtn = document.querySelector('#volume-btn')// Pannello volume
let volumeBar = document.querySelector('.volume-bar')// Wrapper per lo slider del volume
let volumeIcon = document.querySelector('#volume-icon')// Icona volume (pulsante "mute")
let volumeSlider = document.querySelector('#volume-slider')// Slider volume (totale, height 100%)
let volumeCursor = document.querySelector('#volume-cursor')// Slider volume (attuale, 0% < height < 100%)
let volumeCursorHandle = document.querySelector('#volume-cursor') // Dot su slider volume (per Volume on Drag)

let progressWrap = document.querySelector('#progress-bar')//Barra di avanzamento (duration)
let progressBar = document.querySelector('#progress-counter')//Barra del progresso (currentTime)
let seekPreview = document.querySelector('#seek-preview')// Pannello volume

let progress = document.getElementById('progress');
let progressContainer = document.getElementById('progress-container');
let randomBtn = document.querySelector('#random-btn')
let backgroundImage = document.querySelector('#background-image')
let trackCard = document.querySelectorAll('.track-card')

/* variabile globale per far partire la traccia */
let currentTrack = 0
let playing = false
let random = false
let volume = track.volume





function populateTrackList() {
    let wrapper = document.querySelector('#tracklist-wrapper')
    
    
    tracks.forEach((track, index )=>{
        let card = document.createElement('div')

        card.classList.add('col-12')
        card.innerHTML = 
        `
        <div class="d-flex justify-content-between align-items-center px-4 py-3 border-b track-card">
            <img class="thumbnail" src="${track.cover}" alt="copertina">
            <div>
                <h5 class=" tc-linear">${track.artist}</h5>
                <h6 class=" tc-white">${track.title}</h6>
            </div>                
            <i data-track="${index}" class="fab fa-napster fs-2 tc-linear playlist-play"></i>
            
        </div>
        `
        wrapper.appendChild(card)
    })

    let playBtns = document.querySelectorAll('.playlist-play')
    
    playBtns.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            let selectedTrack = btn.getAttribute('data-track')

            currentTrack = selectedTrack 

            changeTrackDetails()
            changePlaylistActive()
            closeSidebar()

        })
    })
}


function openSidebar() {
    let sidebar = document.querySelector('#sidebar')
    sidebar.classList.toggle('open')
}

function closeSidebar(){
    sidebar.classList.remove('open')

    if (!playing) {
        
        play()
        console.log(playing);
    } else{
        playing = false
        play()
        console.log(playing);
    }
}


/* FUNZIONI */
/* audio */
function play() {
    if (!playing) {
        playBtn.classList.add('d-none')
        pauseBtn.classList.remove('d-none')
        trackCover.classList.add('active')
        track.play()
        playing = true        
    }else{
        playBtn.classList.remove('d-none')
        pauseBtn.classList.add('d-none')
        trackCover.classList.remove('active')
        track.pause()
        playing = false
    }
}

function prev() {
    if (random === false) {
        currentTrack--        
    }else{
        currentTrack = [Math.floor(Math.random() * tracks.length)]

    }  
    
    if (currentTrack < 0) {
        currentTrack = tracks.length -1
    }
    
    changeTrackDetails()
    changePlaylistActive()

    
    //controllo se la traccia è in esecuzione
    //se la traccia è in esecuzione e cambio traccia la musica si blocca
    //quindi devo reimpostare playing a false e farla ripartire
    if (playing) {
        playing = false
        play()        
    } 
    
}

function next() {

    if (random === false) {
        currentTrack++        
    }else{
        currentTrack = [Math.floor(Math.random() * tracks.length)]

    }  
    
    
    if (currentTrack > tracks.length -1) {
        currentTrack = 0
    }
    
    changeTrackDetails()
    changePlaylistActive()

    
    //controllo se la traccia è in esecuzione
    //se la traccia è in esecuzione e cambio traccia la musica si blocca
    //quindi devo reimpostare playing a false e farla ripartire
    if (playing) {
        playing = false
        play()        
    } 
    
}





// ~~~~ PANNELLO VOLUME ~~~~~~~~~~~~~~~~~~ //
//Aggiorna volume al caricamento della pagina
updateVolumeCursor()
//Pulsante VOLUME (MUTE)

volumeIcon.addEventListener('click', ()=>{
    if (track.volume) {
        track.volume = 0;
        // volumeIcon.classList.remove('fa-volume-up')
        // volumeIcon.classList.add('fa-volume-mute')
        updateVolumeCursor()
    } else {
        track.volume = volume
        track.volume =  volume
        // volumeIcon.classList.add('fa-volume-up')
        // volumeIcon.classList.remove('fa-volume-mute')
        updateVolumeCursor()
    }
})
//Slider VOLUME (on wheel)
volumeBtn.addEventListener('wheel', (event)=>{
    if (((track.volume + event.wheelDeltaY*0.0001)<=1)&&((track.volume + event.wheelDeltaY*0.0001)>=0)){
        track.volume += event.wheelDeltaY*0.0001
        if (track.volume<0.05){
            track.volume = 0
        }
        volume = track.volume
        updateVolumeCursor()
    }
})
//Slider VOLUME (drag/drop)
let grabbedVol = false
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
        console.log(position)
        track.volume = position
        updateVolumeCursor()
    }
}
function releaseVolHandle(e){
    grabbedVol = false
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
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




function changeTrackDetails() {
    
    track.src = tracks[currentTrack].url
    trackArtist.innerHTML = tracks[currentTrack].artist
    trackTitle.innerHTML = tracks[currentTrack].title
    trackCover.src = tracks[currentTrack].cover
    backgroundImage.src = tracks[currentTrack].cover
}


function changePlaylistActive() {
    let tracklistCards = document.querySelectorAll('.track-card')
    //prima tolgo da tutte le card la classe active, poi la aggiungo a quella che ho cliccato
    tracklistCards.forEach((card, index) =>{
        if (index == currentTrack) {
            card.classList.add('active')
            
        }else{
            card.classList.remove('active')
        }
    })
    
}




function activeRandom(){
    
    randomBtn.classList.toggle('active')
    if(random){
        random = false
        /* play() */
    } else {
        random = true
        /* play() */
    }
    
   
}
randomBtn.addEventListener('click', activeRandom)




// Aggiorna altezza del cursorse Volume
function updateVolumeCursor(){
    volumeCursor.style.height = (100 - track.volume * 100) + '%'
    if(track.volume >= 0.50) {volumeIcon.className = "fas fa-volume-up"} else
    if(track.volume > 0.00) {volumeIcon.className = "fas fa-volume-down"} else
    if(track.volume == 0.00) {volumeIcon.className = "fas fa-volume-mute"}

}

/* EVENTI */
playBtn.addEventListener('click', play)
pauseBtn.addEventListener('click', play)
nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', prev)
track.addEventListener('ended', next)


sidebarToggler.addEventListener('click', openSidebar)

function barEvent(){
    document.addEventListener('keydown', (e)=>{
        if (e.code == 'Space') {
            play()
        } else{
            console.log('errore');
        }
    })

}



function formatTime(sec){
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if(seconds <10){
        seconds = `0${seconds}`;
    }
    return `${minutes}.${seconds}`;
}

let barProgress = document.querySelector('#progress')



function updateProgress(e) {
    let { duration, currentTime } = e.srcElement;
    let progressPercent = (currentTime / duration) * 100;
    barProgress.style.width = `${progressPercent}%`;
    
}

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = track.duration;
    
    track.currentTime = (clickX / width) * duration;
}

setInterval(function(){
    currentTime. innerHTML = formatTime(track.currentTime)
    totalTime. innerHTML = formatTime(track.duration - track.currentTime)
    let barProgress = document.querySelector('#progress')
    let progressPercent = (track.currentTime / track.duration) * 100;
    barProgress.style.width = `${progressPercent}%`;
    
        
},900)
  
/* impostazione dati prima traccia */

populateTrackList()
changeTrackDetails()
changePlaylistActive()
barEvent()

