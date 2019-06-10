		$(function(){
		//布局
		//input blur 焦点
		//正则表达式
		//reg.test input value
				var reg=[
			/^[1][3,4,5,7,8][0-9]{9}$/,
			/^[\w_-]{6,16}$/
			]
			
			$('.btn').blur(function(){
			//取到input的value值，用.val()//索引当前触发的索引值
			var index =$('.btn').index(this);
			var value=$('.btn').eq(index).val();
		
			

			
			checked(reg[index],value,index)

		})
		
		function checked(reg,value,index){

			
			var result = reg.test(value);
			if (result==false) {
				$('.btn-p').eq(index).css('color','red');
				
			} else{
				$('.btn-p').eq(index).css('color','white')
			}
		}	
			
			
		//绑定2个按钮，removerClass,addClass,切换表单
		$('#tab2').click(
			function(){
			$(this).css('color','deepskyblue')
			$('#tab1').css('color','darkgray')
//			$('.cd-signup').removeClass('cd-signup')
//			$('.cd-signup').addClass('block')
//			
     		$('.cd-login').addClass('none')
//			$('.cd-login').removeClass('cd-login')
			$('.cd-signup').addClass('block')
			
			
			}
		)

			
		$('#tab1').click(
			function(){
			$(this).css('color','deepskyblue')
			$('#tab2').css('color','darkgray')
			$('.cd-login').removeClass('none')
			$('.cd-signup').removeClass('block')
			$('.cd-signup').addClass('class','none')
			
			}
//function(){
//					$(this).css('color','green')
//						
//				}
		)	
			
			
			
			
			
			
			
			
			
		})
			