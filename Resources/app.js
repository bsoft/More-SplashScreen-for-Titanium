
var tabGroup = Titanium.UI.createTabGroup();
Ti.include('moreSplash.js');


var win1 = Titanium.UI.createWindow({
	url:'image_view_remote.js',
	title:'Win 1'
});
var tab1 = Titanium.UI.createTab({
	icon:'images/KS_nav_views.png',
	title:'Win 1',
	window:win1
});
var win2 = Titanium.UI.createWindow({
	url:'image_view_remote.js',
	title:'Win 2'
});
var tab2 = Titanium.UI.createTab({
	icon:'images/KS_nav_ui.png',
	title:'Win 2',
	window:win2
});
var win3 = Titanium.UI.createWindow({
	url:'image_view_remote.js',
	title:'Win 3'
});
var tab3 = Titanium.UI.createTab({
	icon:'images/KS_nav_phone.png',
	title:'Win 3',
	window:win3
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);



var splash = new moreSplash(tabGroup);
tabGroup.open();

