



const progress = document.querySelector('#progress');
const song = document.querySelector('#song');
const play_icon = document.querySelector('#ctrl-icon');

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    const promise = song.play();

    if (promise !== undefined) {
        promise.then(_ => {
          
        }).catch(error => {
           
            play_icon.classList.add("fa-play");
            play_icon.classList.remove("fa-pause");
        });
    }

    if (play_icon.classList.contains("fa-pause")) {
        song.pause();
        play_icon.classList.remove("fa-pause");
        play_icon.classList.add("fa-play");
    } else {
        play_icon.classList.add("fa-pause");
        play_icon.classList.remove("fa-play");
        setInterval(() => {
            progress.value = song.currentTime;
        }, 500);
    }
}

play_icon.addEventListener('click', playPause, false);

progress.oninput = function () {
    song.currentTime = progress.value;
};



