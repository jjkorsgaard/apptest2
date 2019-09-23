function cleaning(){
	var url='https://placering.000webhostapp.com';	
	openBrowser(url);
}

function openBrowser(url) {
    var target = '_blank';
    var options = "location=no"
    var ref = cordova.InAppBrowser.open(url, target, options);
 }