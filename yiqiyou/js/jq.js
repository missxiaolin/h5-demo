
$(function(){
//	
//	$('.zi').find('span').animate({'width':'90%'},5000)
	//	//第二页面跳转
	var imgs=['img/sj1.jpg','img/sj2.jpg','img/sj3.jpg','img/sj4.jpg','img/sj5.jpg','img/sj6.jpg','img/sj7.jpg','img/sj8.jpg'];
	var i=Math.floor(Math.random()*imgs.length)
	var t=imgs[i]
	$('.two').find('#box3').find('img').attr('src',t)
	

})