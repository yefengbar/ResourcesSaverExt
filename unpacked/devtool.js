//console.log('Hello from -> Devtool');
chrome.devtools.panels.create(
	"Jiayou_web",
	"icon.png",
	"content.html",
	function(panel) {
		console.log("Content is loaded to panel");
	}
);
