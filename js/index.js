$(function(){
	
	$('#header1').load('commontHTML/header.html')
	$('#header2').load('commontHTML/header2.html')
	$('footer').load('commontHTML/footer.html')
	
	
	

	
	
	//吸顶效果，回到顶部
	//对页面滚动条滚动的监听：要放在页面加载的时候
	
		
		$(window).scroll(function(event){
			var a=$(this).scrollTop()
		
			if(a>=40){
				$('#header2').css(
					{
						position:'fixed',
						left:'0',
						top:'0',
						
					}
				).css('z-index',20)
				$('#backTop').css('display','block')
				$('#backTop').click(function(){
//					$('html, body').animate({scrollTop:0}, 'slow');
//用这个不行$('html, body').animate({scrollTop:0}, 'slow');			
			document.documentElement.scrollTop=0;
				})
			}else{
				$('#header2').css(
					{
						position:''
						
					}
				)
				$('#backTop').css('display','none')
			}
})
		

	//水平移动轮播
	//js实现水平轮播	
			var inow =0;
			var osliderbody=document.getElementById('slider-body');
			var osliderimg=document.getElementsByClassName('slider-img');
			var next=document.getElementById('slider-next')
			var before = document.getElementById('slider-before')
			index()
			function changleft(){
				var nowleft=-inow*1920;
				//js要带px单位
				
				osliderbody.style.left=nowleft+'px';
			}
			
			

			
			function index(){
			time=setInterval(function(){
				
				inow++;
				
				if(inow>osliderimg.length-1){
					inow=0;
					changleft();
					osliderbody.style.transition='';
				}
				else{
					changleft();
					osliderbody.style.transition='left 2s';
				}

			},2000)
			}
	
	//before i--
			before.onclick=function(){
				//清除定时器
				clearInterval(time);
				inow--;
				if(inow<0){
					inow=osliderimg.length-1;
				}
				
				changleft()
				//再调用
				index();
			}
			//next i++
			next.onclick=function(){
				//清除定时器
				clearInterval(time);
				inow++;
				if(inow>osliderimg.length-1){
					inow=0;
				}
				
				changleft()
				//再调用
				index();
			}
	
	
	
	
	
	
	
		//js实现水平轮播	222222222222222222
			var onsaleinow =0;
			var onsaleul=document.getElementById('onsale-box-ul');
			
			var onsaleli=document.getElementsByClassName('onsale-img');
			var onsalenext=document.getElementById('onsale-next')
			var onsalebefore = document.getElementById('onsale-before')
		
			function onsalechangleft(){
				var nowleft=-onsaleinow*1226;
				//js要带px单位
				onsaleul.style.left=nowleft+'px';
			}
			
			

			
			
			//before i--
			onsalebefore.onclick=function(){

				onsaleinow--;
				if(onsaleinow<0){
					onsaleinow=0;
					console.log(onsaleinow)
				}
				
				onsalechangleft()
				//再调用
			
			}
			//next i++
			onsalenext.onclick=function(){

				onsaleinow++;
				if(onsaleinow>3){
					onsaleinow=3;	
				}
				
				onsalechangleft()
				//再调用
				
			}
	
	
	///33333333333333333333333333333

//		    var anow =0;
//
//		   
//			var modulesliderul=document.getElementById('module-slider-ul');
//
//			var modulesliderli=document.getElementsByClassName('module-slider-li');
//			var moduleslidernext=document.getElementById('module-slider-next')
//
//			
//			var modulesliderbefore = document.getElementById('module-slider-before')
//
//
//			$('.module-slider-btn-li').click(function(){
//				//定义索引值
//          anow=$('.module-slider-btn-li').index(this)
//
//				var nowleft=-anow*777;
//				//js要带px单位left=;
//
//				modulesliderul.style.left=nowleft+'px';
//				modulesliderul.style.transition='';
//			})
//
//
//			
//		//js实现水平轮播	
//			
//			indexth()
//			function changleftth(){
//				var nowleft=-anow*450;
//				//js要带px单位
//				
//		
//			
//				modulesliderul.style.left=nowleft+'px';
//			}
//			
//			
//
//			
//			function indexth(){
//			timeth=setInterval(function(){
//				
//				anow++;
//
//				if(anow>modulesliderli.length-1){
//					anow=0;
//					changleftth();
//					modulesliderul.style.transition='';
//			
//				}
//				else{
//					changleftth();
//
//					modulesliderul.style.transition='left 1s';
//
//				}
//
//			},2000)
//			}
//			//before i--
//			modulesliderbefore.onclick=function(){
//				//清除定时器
//				clearInterval(timeth);
//				anow--;
//				if(anow<0){
//					anow=modulesliderli.length-1;
//				}
//				
//				changleftth()
//				//再调用
//				indexth();
//			}
//			//next i++
//			moduleslidernext.onclick=function(){
//				//清除定时器
//			clearInterval(timeth);
//				anow++;
//			if(anow>modulesliderli.length-1){
//					anow=0;
//				}
//				
//				changleftth()
//				//再调用
//				indexth();
//			}
//	

	
	
	
	//tab切换

	

	
	
	$('.tab-head-item').mouseover(		
		function(event){
	    var index = $('.tab-head-item').index(this);
	    console.log( index )
	    $('.tab-body-item').removeClass('block').addClass('none')
		$('.tab-body-item').eq(index).removeClass('none').addClass('block')
		
	})
	
	
	
	

	
	
	
//		    var anow =0;
//
//		   
//			var modulesliderul=document.getElementsByClassName('module-slider-ul');
//
//			var modulesliderli=document.getElementsByClassName('module-slider-li');
//			var moduleslidernext=document.getElementsByClassName('module-slider-next')
//
//			
//			var modulesliderbefore = document.getElementsByClassName('module-slider-before')
//
//
//			$('.module-slider-btn-li').click(function(){
//				//定义索引值
//          anow=$('.module-slider-btn-li').index(this)
//			console.log(anow)
//				var nowleft=-anow*777;
//				//js要带px单位left=;
//           var index=$('.module-slider-ul').index(this)
//               var left=nowleft+'px';
//               console.log(left)
//				$('.module-slider-ul').eq(index).css('left','left')
//				$('.module-slider-ul').eq(index).css('transition','')
//			})
//
//
//	
//			
//			indexth()
//			function changleftth(){
//				var nowleft=-anow*450;
//				//js要带px单位
//				
//		    var index=$('.module-slider-ul').index(this)
//			var left=nowleft+'px';
//				$('.module-slider-ul').eq(index).css('left','left');
//			}
//			
//			
//
//			
//			function indexth(){
//			timeth=setInterval(function(){
//				
//				anow++;
//
//				if(anow>modulesliderli.length-1){
//					anow=0;
//					changleftth();
//					 var index=$('.module-slider-ul').index(this)
//					$('.module-slider-ul').eq(index).css('transition','')
//			
//				}
//				else{
//					changleftth();
//
//					$('.module-slider-ul').eq(index).css('transition','left 1s')
//
//				}
//
//			},2000)
//			}
			//before i--
			
//			$('.module-slider-before').click(function(){
//				//清除定时器				
//				console.log(11323123)
//				clearInterval(timeth);
//				anow--;
//				if(anow<0){
//					anow=modulesliderli.length-1;
//				}
//				
//				changleftth()
//				//再调用
//				indexth();
//			})
//			//next i++
//			$('.module-slider-next').click=function(){
//				//清除定时器
//			clearInterval(timeth);
//				anow++;
//			if(anow>modulesliderli.length-1){
//					anow=0;
//				}
//				
//				changleftth()
//				//再调用
//				indexth();
//			}
//	
	

	
	










	
	
})