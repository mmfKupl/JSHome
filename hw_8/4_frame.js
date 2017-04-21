var Framework = {
	append: function (t, w){ t.appendChild(w); },
	
	prepend: function (t, w){ t.insertBefore(w, t.firstChild); },
	
	replace (t, w){ t.parentNode.replaceChild(t, w); },

	create (s){ return document.createElement(s); },
	
	remove (t){ t.remove(); },
	
	event (t, event, fun){
		if(typeof t.attachEvent == "function")  t.attachEvent("on" + event, fun);	
			else t.addEventListener(event, fun);
	},
	
	unevent (t, event, fun){
		if(typeof t.attachEvent == "function") t.detachEvent("on" + event, fun);
			else t.removeEventListener(event, fun);
	},
	
	dispatch (t, et){
		var event = new Event(et);
		t.dispatchEvent(event);
	},
	
	get: {
		byId: function(s){
			return document.getElementById(s);
		},
		bySelector: function(s){
			return document.querySelector(s);
		},
		bySelectorAll: function(s){
			return document.querySelectorAll(s);
		},
		byClass: function(s){
			return document.getElementsByClassName(s);
		},
		byTag: function(s){
			return document.getElementsByTagName(s);
		}
	},
	
	width: function(e){ return e.clientWidth; },
	
	height: function(e){ return e.clientHeight; },
	
	pageTop: function(e){
		var offset = 0;
		while(e.offsetParent != null){
			offset = e.offsetTop;
			e = e.offsetParent;
		}
		return offset;
	},
	
	pageLeft: function(e){
		var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetLeft;
			e = e.offsetParent;
		}
		return offset;
	},
	
	css: function(e, property, value){
		if(arguments.length == 2){
			var style = window.getComputedStyle(e);
			return style[property];
		}
		if(arguments.length == 3){ e.style[property] = value; }
	}
}
