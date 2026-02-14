const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicControl");

function startMusic(){
    music.play().then(()=>{
        musicBtn.innerHTML = `<svg id="pauseIcon" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M6 5h4v14H6zm8 0h4v14h-4z" fill="black"/>
                                </svg>;`;
    }).catch(()=>{});
}

document.addEventListener("click", startMusic, { once: true });

musicBtn.addEventListener("click", function(e){
    e.stopPropagation();
    if(music.paused){
        music.play();
        musicBtn.innerHTML = `<svg id="pauseIcon" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M6 5h4v14H6zm8 0h4v14h-4z" fill="black"/>
                                </svg>`;
    }else{
        music.pause();
        musicBtn.innerHTML = `<svg id="playIcon" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M8 5v14l11-7z" fill="black"/>
                                </svg>`;
    }
});
