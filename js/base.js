function popimg(img,text){
	theImage = new Image();
	theImage.src = img;
	imgwidth = theImage.width;
	imgheight = theImage.height;
	wwidth=$(window).width();
	wheight=$(window).height();
	realheight=0;
	realwidth=0;
	if(wwidth>=wheight && imgwidth>=imgheight && (wwidth/wheight)>=(imgwidth/imgheight) && wheight>=imgheight)
	{
		realheight=imgheight;
		realwidth=realheight*(imgwidth/imgheight);
	}
	if(wwidth>=wheight && imgwidth>=imgheight && (wwidth/wheight)>=(imgwidth/imgheight) && wheight<imgheight)
	{
		realheight=wheight-20;
		realwidth=realheight*(imgwidth/imgheight);
	}
	if(wwidth>=wheight && imgwidth>=imgheight && (wwidth/wheight)<(imgwidth/imgheight) && wwidth>=imgwidth)
	{
		realwidth=imgwidth;
		realheight=realwidth*(imgheight/imgwidth);
	}
	if(wwidth>=wheight && imgwidth>=imgheight && (wwidth/wheight)<(imgwidth/imgheight) && wwidth<imgwidth)
	{
		realwidth=wwidth-20;
		realheight=realwidth*(imgheight/imgwidth);
	}
	if(wwidth>=wheight && imgwidth < imgheight &&  wheight>=imgheight)
	{
		realheight=imgheight;
		realwidth=realheight*(imgwidth/imgheight);
	}
	if(wwidth>=wheight && imgwidth < imgheight &&  wheight<imgheight)
	{
		realheight=wheight-20;
		realwidth=realheight*(imgwidth/imgheight);
	}


	if(wwidth < wheight && imgwidth >= imgheight &&  wwidth>=imgwidth)
	{
		realwidth=imgwidth;
		realheight=realwidth*(imgheight/imgwidth);
	}

	if(wwidth < wheight && imgwidth >= imgheight &&  wwidth<imgwidth)
	{
		realwidth=wwidth-20;
		realheight=realwidth*(imgheight/imgwidth);
	}

	if(wwidth < wheight && imgwidth < imgheight &&  wheight>=imgheight)
	{
		realheight=imgheight;
		realwidth=realheight*(imgwidth/imgheight);
	}
	if(wwidth < wheight && imgwidth < imgheight &&  wheight<imgheight)
	{
		realheight=wheight-20;
		realwidth=realheight*(imgwidth/imgheight);
	}

	var html = '<div class="show-picture"><img id="piczoom" src="'+img+'"  onclick="popclose()" style="width:'+realwidth+'px;height:'+realheight+'px;"><span>'+text+'</span></div>';
	$("body").prepend('<div id="pop"><div class="pop_bg" onclick="popclose()"></div><div class="pop_close" onclick="popclose()">x</div><div class="popimg">'+html+'</div><div>');
	$("#pop").css({"position":"fixed","width":"100%","height":wheight+"px","top":"0px","left":"0px","z-index":"997"});
	$(".pop_bg").css({opacity:"0.8","background":"#000","position":"absolute","width":"100%","height":wheight+100+"px","top":"0px","left":"0px","z-index":"998"})
	$(".pop_close").css({"border":"1px solid #3f3f3f","font-family":"Tahoma","color":"#3f3f3f","background":"#fff","border-radius":"100%","font-size":"20px","text-align":"center","cursor":"pointer","position":"absolute","width":"28px","height":"28px","line-height":"24px","top":"2%","right":"2%","z-index":"1000"})
	$(".popimg").css({"display":"none","position":"absolute","width":+realwidth+"px","height":+realheight+"px","margin-left":"-"+realwidth/2+"px","margin-top":"-"+realheight/2+"px","top":"50%","left":"50%","left":"50%","z-index":"999"});
	$(".popimg").fadeIn();
}
function popclose(){
	$("#pop").remove();
}