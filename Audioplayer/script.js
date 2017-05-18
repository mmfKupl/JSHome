var audio = document.getElementsByTagName('audio')[0];
var play = document.getElementById('play');
var player = document.querySelector('.player');
var interval;
var flag = false;
audio.addEventListener('loadedmetadata', function(){
    var time = audio.duration;
    var str;
    var minutes = parseInt(time/60);
    if(parseInt(minutes/10) == 0){
        str = '0' + minutes;
    }
    else{
        str = minutes;
    }
    var seconds = Math.ceil(time - minutes*60)
    if(parseInt(seconds/10) == 0){
        str += ":0" + seconds;
    }
    else{
        str += ":" + seconds;
    }
    player.querySelector('.time').innerText = str;

});

play.addEventListener('click', function(){
    if(this.classList.contains('play')){
        audio.play();
        this.classList.remove('play');
        this.classList.add('pause');
        flag = true;
    }
    else{
        audio.pause();
        this.classList.remove('pause');
        this.classList.add('play');
        flag = false;
    }
});

player.querySelector('.stop').addEventListener('click', function(){
    audio.pause();
    audio.currentTime = 0;
    if(play.classList.contains('pause')){
        play.classList.remove('pause');
        play.classList.add('play');
    }
});

player.querySelector('.slower').addEventListener('click',function(){
    audio.playbackRate /= 1.25;
});

player.querySelector('.faster').addEventListener('click', function(){
    audio.playbackRate *=1.25;
});

player.querySelector('.volume').addEventListener('click', function(){
    if(this.classList.contains('muted')){
        audio.muted = true;
        this.classList.remove('muted');
        this.classList.add('active');
    }
    else{
        audio.muted = false;
        this.classList.remove('active');
        this.classList.add('muted');
    }
});

player.querySelector('.range').addEventListener('input', function(){
    audio.volume = this.value;
});
audio.addEventListener('play', function(){
    interval = setInterval(function(){
        var time = audio.currentTime;
        var str;
        var minutes = parseInt(time/60);
        if(parseInt(minutes/10) == 0){
            str = '0' + minutes;
        }
        else{
            str = minutes;
        }
        var seconds = Math.ceil(time - minutes*60)
        if(parseInt(seconds/10) == 0){
            str += ":0" + seconds;
        }
        else{
            str += ":" + seconds;
        }
        player.querySelector('.currentTime').innerText = str;

    }, 1000)
});

audio.addEventListener('pause', function(){
    clearInterval(interval);
});

audio.addEventListener('play', function(){
    var progress = player.querySelector('.progress');
    var interval = setInterval(function(){
        var time = audio.currentTime*100/audio.duration;
        progress.style.width = time +'%';
    }, 500);
});

player.querySelector('.progressbar').addEventListener('click', function(e){
    var progressbar = player.querySelector('.progressbar');
    var progress = player.querySelector('.progress');
    var widthProgressbar = progressBar.clientWidth;
    var left =progressbar.getBoundingClientRect().left;
    var percent = (e.clientX - left)/widthProgressbar;
    console.log(percent);
    audio.currentTime = audio.duration * percent;
});

document.addEventListener('visibilitychange', function () {
    if(document.hidden) {
        if(flag == true) {
            audio.pause();
        }
    }
    else{
        if(flag == true) {
            audio.play();
        }
    }
});