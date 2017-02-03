(function() {
	var time = 1000;
	var ready = 0;

    if( localStorage["delay"] == null){
		localStorage["delay"]= 1000;
		console.log("Default Delay Loaded");
	}
	if( localStorage["ready"] == null){
		localStorage["ready"]= 0;
		console.log("Default Ready Loaded");
	}
	var ready = localStorage["ready"];
	var time = localStorage["delay"];
	
    setInterval(function() {
        $('#bigRedButton').click();
    }, time);

})();