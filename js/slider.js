function slider( index ){
	
		var iNow = 0;
		var timer;
		inter( )
		
		
		
		
		function inter(  ){
			timer = setInterval(function( ){
				iNow++;
				if(iNow > 2){
					iNow = 0
					$('.module-slider-ul').css('transition','')
				}else{
					$('.module-slider-ul').css('transition','left 1s')
				}
//				console.log( iNow)
				var nowLeft = -iNow*777;
				if(!index){
					$('.module-slider-ul').animate({'left':nowLeft},'slow','linear')
//					$('.module-slider-ul').css('transition','').css('left','nowleft')
				}else{
					$('.module-slider-ul').eq(index).animate({'left':nowLeft},'slow','linear')
//					$('.module-slider-ul').css('transition','left 1s').css('left','nowleft')
				}
				
				
			},2000)
			
		}
	
	
}
slider( )
$('.module-slider-next').click(function(){
				//清除定时器
				
			var index = $('.module-slider-next').index(this)
//			console.log(index)
			slider( index )
})
$('.module-slider-before').click(function(){
				//清除定时器
				
			var index = $('.module-slider-before').index(this)
			slider( index )
})

	
			
			//底部按钮
			$('.module-slider-btn-li').click(function(){
//				alert('a')
				var index = $('.module-slider-btn-li').index(this)
//				console.log(index)
				iNow=$('.module-slider-btn-li').index(this)+1
			var y=iNow%3
//			console.log(y)
			if(y==1){
				iNow=0;
			}
			if(y==2){
				iNow=1
			}
			if(y==0){
				iNow=2
			}
//			console.log(iNow)
			var nowLeft = -iNow*777;
//			console.log(nowLeft)
			
			if(index<3){
				index=0;
			}else if(index<6){
				index=1
			}
			else if(index<9){
				index=2
			}
			else if(index<12){
				index=3
			}
			else if(index<15){
				index=4
			}
			
			console.log(index)
			$('.module-slider-ul').eq(index).css('left','nowLfte')
			
//$('.module-slider-ul').eq(index).animate({'left':nowLeft},'slow','linear')
					
			})
		