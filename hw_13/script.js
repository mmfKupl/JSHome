var div = document.getElementsByTagName('div')[1];
var Bolding = document.getElementsByTagName('button')[0];
var Italic = document.getElementsByTagName('button')[1];
var Underline = document.getElementsByTagName('button')[2];
var Fontsize = document.getElementsByTagName('input')[0];
var Fontadd = document.getElementsByTagName('button')[3];
var Fontcolor = document.getElementsByTagName('input')[1];
var Fontcolradd = document.getElementsByTagName('button')[4];
var Backcolradd = document.getElementsByTagName('button')[5];
var Horizontal = document.getElementsByTagName('button')[6];
var Paragraph = document.getElementsByTagName('button')[7];
var Link = document.getElementsByTagName('button')[8];
var UnLink = document.getElementsByTagName('button')[9];
var IMG = document.getElementsByTagName('button')[10];
var Center = document.getElementsByTagName('button')[11];
var Left = document.getElementsByTagName('button')[12];

div.contentEditable = true;
Bolding.onclick = function () {
    this.classList.toggle('clicked');
    document.execCommand('bold', false, null);
};
Italic.onclick = function () {
    this.classList.toggle('clicked');
    document.execCommand('italic', false, null);
};
Underline.onclick = function () {
    this.classList.toggle('clicked');
    document.execCommand('underline', false, null);
};
Fontadd.onclick = function () {
    this.classList.toggle('clicked');
  var x = Fontsize.value;
  document.execCommand('fontsize', false, x);
};
Fontcolradd.onclick = function () {
    this.classList.toggle('clicked');
    var x = Fontcolor.value;
    document.execCommand('forecolor', false, x);
};
Backcolradd.onclick = function () {
    this.classList.toggle('clicked');
    var x = Fontcolor.value;
    document.execCommand('backcolor', false, x);
};
Horizontal.onclick = function () {
    this.classList.toggle('clicked');
    document.execCommand('inserthorizontalrule', false, null);
};
Paragraph.onclick = function () {
    this.classList.toggle('clicked');
    document.execCommand('insertparagraph', false, null);
};
Link.onclick = function () {
    this.classList.toggle('clicked');
        var x = prompt("Введите ссылку");
        document.execCommand('createlink', false, x);
};
UnLink.onclick = function () {
    this.classList.toggle('clicked');
        document.execCommand('unlink', false, null);
};
IMG.onclick = function () {
    this.classList.toggle('clicked');
    var x = prompt("Введите ссылку на картинку");
    document.execCommand('insertimage', false, x);
};
Center.onclick = function () {
    this.classList.toggle('clicked');
    document.execCommand('justifycenter', false, null);
};
Left.onclick = function () {
    this.classList.toggle('clicked');
    document.execCommand('justifyleft', false, null);
};
