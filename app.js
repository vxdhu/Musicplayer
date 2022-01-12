const playbtn = document.querySelector('#play')
const prevbtn = document.querySelector('#prev')
const nextbtn = document.querySelector('#next')
const music = document.querySelector('.musicContainer')
const audio = document.querySelector('audio')
const cover = document.querySelector('#cover')
const title = document.querySelector('h2')
const artist = document.querySelector('h3')

//Songs List
const songs = [{
        name: 'Blinding Lights',
        artist: 'The Weeknd',
        source: 'songs/weeknd1.mp3',
        image: 'images/weeknd1.jpg'
    },
    {
        name: 'Reminder',
        artist: 'The Weeknd',
        source: 'songs/weeknd2.mp3',
        image: 'images/weeknd2.jpg'
    }, {
        name: 'Astrothunder',
        artist: 'Travis Scott',
        source: 'songs/travis1.mp3',
        image: 'images/travis1.jpg'
    }, {
        name: 'Butterfly Effect',
        artist: 'Travis Scott',
        source: 'songs/travis2.mp3',
        image: 'images/travis2.jpg'
    },
    {
        name: `Life's Good`,
        artist: 'Juice Wrld',
        source: 'songs/juice1.mp3',
        image: 'images/travis2.jpg'
    },
    {
        name: 'The way life goes',
        artist: 'Lil Uzi Vert',
        source: 'songs/liluzi1.mp3',
        image: 'images/travis2.jpg'
    }
]

let Index = 1

//initially load Song
loadSong(songs[Index])


//Event Listeners
nextbtn.addEventListener('click', nextSong)
prevbtn.addEventListener('click', prevSong)
audio.addEventListener('ended', nextSong)





//functions
function loadSong(songs) {

    audio.src = songs.source
    title.innerText = songs.name
    artist.innerText = songs.artist
    cover.src = songs.image

}


function playSong() {

    music.classList.add('play')
    playbtn.classList.replace('fa-play', 'fa-pause')


    audio.play()
}

function pauseSong() {

    music.classList.remove('play')
    playbtn.classList.replace('fa-pause', 'fa-play')

    audio.pause()
}

function nextSong() {
    Index++
    if (Index > songs.length - 1) {
        Index = 0
    }


    loadSong(songs[Index])

    const isPlaying = music.classList.contains('play')

    if (isPlaying) {
        playSong()
    }


}

function prevSong() {
    Index--
    if (Index < 0) {
        Index = songs.length - 1
    }


    loadSong(songs[Index])


    const isPlaying = music.classList.contains('play')

    if (isPlaying) {
        playSong()
    }

}





//Event Listeners
playbtn.addEventListener('click', () => {
    const isPlaying = music.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }

})