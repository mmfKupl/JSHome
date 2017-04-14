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
	}
}
