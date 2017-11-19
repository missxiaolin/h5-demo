window.onload=function(){
	var btn = document.getElementById("btn");
	var music = document.getElementById("mp3");
	var str = 1;
	music.play();
	btn.onclick=function(){
		if(str==1){
			music.pause();
			str=2;
			btn.className='';
		}else if(str==2){
			music.play();
			str=1;
			btn.className='xz';
		}
	}
}
