$(function(){
	
	$('#header1').load('commontHTML/header.html')
	$('#header2').load('commontHTML/header2.html')
	$('footer').load('commontHTML/footer.html')
	
	
	
	
	
	
	//吸顶效果，回到顶部
	//对页面滚动条滚动的监听：要放在页面加载的时候
	
		
		$(window).scroll(function(event){
			var a=$(this).scrollTop()
//			console.log(a)
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
	
		//布局
			//监听鼠标在spic上移动的事件
			//获取鼠标坐标
		
			$('#spic').mousemove(function(event){
			
				
	var nowleft = Math.floor(event.clientX - $('#spic').offset().left)-100;
	var nowtop  = event.clientY - $('#spic').offset().top-100;		
//				console.log( nowleft,nowtop )
			
			if(nowleft<0){
					nowleft = 0 ;
				}
				if(nowleft>300){
					nowleft = 300 ;
				}				
				if(nowtop<0){
					nowtop = 0 ;
				}				
				if(nowtop>300){
					nowtop = 300 ;
				}				
				
				$('#sspic').css(
					{
						'left':nowleft,
						'top':nowtop
					}
					)
				
				//var str = (-nowtop*3)+'px '+(-nowleft*3)+'px';//有个空格
				//console.log( str )
			//	$('#bpic').css('backgroundPosition',str)
				$('#bigpic').css({
					'top':-nowtop*3,
					'left':-nowleft*3
				})				
					
			
			})
	
	
	
	
	
	
	
	
	//hover二维码
	$('#codebuy').hover(function(){
		$('#codebuypic').css('display',"block")
		
	},function(){
				$('#codebuypic').css('display',"none")
	})
	

//倒计时
var now=new Date();
        var end=new Date(2019,0,18,16,10,00);//结束的时间：年，月，日，分，秒（月的索引是0~11）
        /*两个时间相减,得到的是毫秒ms,变成秒*/
        var result=Math.floor(end-now)/1000; 
        
        var interval=setInterval(sub,1000); //定时器 调度对象
        /*封装减1秒的函数*/
        function sub(){
            if (result>1) {
               result = result - 1; 
               var second = Math.floor(result % 60);     // 计算秒 ，取余  
               var minite = Math.floor((result / 60) % 60); //计算分 ，换算有多少分，取余，余出多少秒
               var hour = Math.floor((result / 3600) % 24); //计算小时，换算有多少小时，取余，24小时制除以24，余出多少小时
               var day = Math.floor(result / (3600*24));  //计算天 ，换算有多少天
             
               $("#remainTime").html('倒计时：'+day + "天&#160;" + hour + "小时&#160;" + minite + "分钟&#160;" + second + "秒");
            } else{
                alert("实训结束！");
                window.clearInterval(interval);//这里可以添加倒计时结束后需要执行的事件 
            }
        };



//轮播
	        var ainow =0;
			var smallsliderul=document.getElementById('smallslider-ul');
			var smallsliderli=document.getElementsByClassName('smallslider-li');
			var smallsliderafter=document.getElementById('smallslider-after')
			var smallsliderbefore = document.getElementById('smallslider-before')
			
			
			
		//每次要记住图片是从0开始数的	
			$('.smallslider-li').click(function(){
				var indexo=$('.smallslider-li').index(this)+1;
			
				var ourl='url(img/商品小轮播/'+indexo+'.png)'
				var ourll='img/商品小轮播/'+indexo+'.png'
				console.log(ourl,ourll)
			
				$('#bigpic').attr('src',ourll)
				$('#spic').css('background-image',ourl)
				
			})
			
			
			function changleft(){
				var anowleft=-ainow*90;
				//js要带px单位
				smallsliderul.style.left=anowleft+'px';
			}
			
			

			
		
			//before i--
			smallsliderbefore.onclick=function(){
				
			
				ainow--;
				if(ainow<0){
					ainow=0;
					
				}
				
				changleft()
				//再调用
			
			}
			//next i++
			smallsliderafter.onclick=function(){
			
			
				ainow++;
				if(ainow>1){
					ainow=1
				}
				
				changleft()
				//再调用
		
			}


//加减号
var buynum=0
$('.subbtn').click(function(){
	
	buynum--
	if(buynum<=0){buynum=0;}
	$('#buynumber').attr('value',buynum)
})

$('.addbtn').click(function(){
	
	buynum++
	
	$('#buynumber').attr('value',buynum)
})

})