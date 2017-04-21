var block = document.getElementById('block');
window.onscroll = function() {
    if (window.pageYOffset >= 3000 && window.pageYOffset <= 7000) {
          block.classList.add('fix');
    }
    else block.classList.remove('fix');
}