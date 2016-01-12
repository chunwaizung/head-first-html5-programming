window.onload = init;

function init () {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	loadPlaylist();
}

function handleButtonClick () {
	var songTextInput = document.getElementById("songTextInput");
	var songName = songTextInput.value;
	if (songName.length) {// check null
		var songItem = document.createElement("li");//新建元素，传入类型
		songItem.innerHTML = songName;//设置新元素的文本，用innerHTML
		var playlist = document.getElementById("playlist");//获取希望插入的元素
		playlist.appendChild(songItem);//用appendChild()函数把新元素插入到希望插入的元素
		save(songName);
	} else {
		alert("HEHE,very funny:)");
	}
}
