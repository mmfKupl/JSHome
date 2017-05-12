var video = document.getElementsByTagName('video')[0];
var player = document.querySelector('.player');
var play = document.getElementById('play');
var interval;

video.addEventListener('loadedmetadata', function(){
    var time = video.duration;
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
    if(play.classList.contains('play')){
        video.play();
        play.classList.remove('play');
        play.classList.add('pause');
    }
    else{
        video.pause();
        play.classList.remove('pause');
        play.classList.add('play');
    }
});

player.querySelector('.stop').addEventListener('click', function(){
    video.pause();
    video.currentTime = 0;
    if(play.classList.contains('pause')){
        play.classList.remove('pause');
        play.classList.add('play');
    }
    stopCurrentTime();
});

player.querySelector('.slower').addEventListener('click',function(){
    video.playbackRate /= 1.25;
});

player.querySelector('.faster').addEventListener('click',function(){
    video.playbackRate *=1.25;
});

player.querySelector('.volume').addEventListener('click', function(){
    if(this.classList.contains('muted')){
        video.muted = true;
        this.classList.remove('muted');
        this.classList.add('active');
    }
    else{
        video.muted = false;
        this.classList.remove('active');
        this.classList.add('muted');
    }
});

player.querySelector('.range').addEventListener('input', function(){
    video.volume = this.value;
});

video.addEventListener('play', function(){
    interval = setInterval(function(){
        var time = video.currentTime;
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

        var progress = player.querySelector('.progress');
        var time = video.currentTime*100/video.duration;
        progress.style.width = time +'%';

    }, 500)
});

player.querySelector('.progressbar').addEventListener('click', function(e){
    var progressbar = player.querySelector('.progressbar');
    var progress = player.querySelector('.progress');
    var widthProgressbar = progressbar.clientWidth;
    var left =progressbar.getBoundingClientRect().left;
    var percent = (e.clientX - left)/widthProgressbar;
    video.currentTime = video.duration * percent;
});

video.addEventListener('pause', function(){
    clearInterval(interval);
});

video.addEventListener('click', function(){
    if(play.classList.contains('play')){
        video.play();
        play.classList.remove('play');
        play.classList.add('pause');
    }
    else{
        video.pause();
        play.classList.remove('pause');
        play.classList.add('play');
    }
});