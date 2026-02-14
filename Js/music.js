const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicControl");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

function startMusic(){
    music.play().then(()=>{
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    }).catch(()=>{});
}

document.addEventListener("click", startMusic, { once: true });

musicBtn.addEventListener("click", function(e){
    e.stopPropagation();

    if(music.paused){
        music.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    }else{
        music.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
    }
});
