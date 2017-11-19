window.onload=function(){
	var mz=document.getElementById("mz");
	var au=document.getElementById("au");
	var sta=1;//设置变量
	mz.onclick=function(){
		
		if (sta==1) {
		au.pause()
		mz.style.animation='null'
		sta=2;
	}else{
		au.play();
		mz.style.animation='run 1s linear infinite '
		sta=1
	}
	}
	
}
