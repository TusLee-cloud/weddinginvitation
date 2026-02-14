const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicControl");

function startMusic(){
    music.play().then(()=>{
        musicBtn.innerHTML = "⏸";
    }).catch(()=>{});
}

document.addEventListener("click", startMusic, { once: true });

musicBtn.addEventListener("click", function(e){
    e.stopPropagation();
    if(music.paused){
        music.play();
        musicBtn.innerHTML = "⏸";
    }else{
        music.pause();
        musicBtn.innerHTML = "▶";
    }
});
