var tbl = document.createElement("table"); 
document.body.appendChild(tbl); 

var arr = new Array('Href', "Host", "Protocol", "Port", "Search", "Hash",
"Screen width", "Screen height", "Screen availWidth", "Screen availHeight",
"Screen colorDepth", "Screen orientation", "Navigator appCodeName",
"Navigator appName", "Navigator userAgend", "Navigator cookieEnabled", 
"Navigator javaEnabled", "Navigator online", "inner Height", 
"innerWidth", "screenX", "screenY", "scrollX", "scrollY");

var opt = [window.location.href, window.location.host, window.location.protocol,
window.location.port,window.location.search,window.location.hash,
window.screen.width, window.screen.height, window.screen.availWidth,
window.screen.availHeight, window.screen.colorDepth, window.screen.orientation.type,
window.navigator.appCodeName, window.navigator.appName, window.navigator.userAgent, 
window.navigator.cookieEnabled, window.navigator.javaEnabled(), 
window.navigator.onLine, window.innerHeight, window.innerWidth,
window.screenX, window.screenY, window.scrollX, window.scrollY];
//for(var i = 0; i < name.length; i++)
//	console.log(name[i]);
for(var i = 0; i < 23; i++){
	var tr = document.createElement("tr");
	tbl.appendChild(tr);
	var td = document.createElement("td"); 
	tr.appendChild(td);
	td.innerText = arr[i];
	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerText = opt[i];
}