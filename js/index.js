$(function() {

	$('#header1').load('commontHTML/header.html')
	$('#header2').load('commontHTML/header2.html')
	$('footer').load('commontHTML/footer.html')

	//吸顶效果，回到顶部
	//对页面滚动条滚动的监听：要放在页面加载的时候

	$(window).scroll(function(event) {
		var a = $(this).scrollTop()

		if(a >= 40) {
			$('#header2').css({
				position: 'fixed',
				left: '0',
				top: '0',

			}).css('z-index', 20)
			$('#backTop').css('display', 'block')
//			$('#backTop').click(function() {
				//					$('html, body').animate({scrollTop:0}, 'slow');
				//用这个不行$('html, body').animate({scrollTop:0}, 'slow');			
//				document.documentElement.scrollTop = 0;
//				$('html,body').animate({'scrollTop':0},500)
				
				
//			})
		} else {
			$('#header2').css({
				position: ''

			})
			$('#backTop').css('display', 'none')
		}
	})
	
			$('#backTop').click(function(){
				$('html,body').animate({'scrollTop':0},1000)
			})
   			
 			
 			
 			
	//水平移动轮播
	//js实现水平轮播	
	var inow = 0;
	var osliderbody = document.getElementById('slider-body');
	var osliderimg = document.getElementsByClassName('slider-img');
	var next = document.getElementById('slider-next')
	var before = document.getElementById('slider-before')
	index()

	function changleft() {
		var nowleft = -inow * 1920;
		//js要带px单位

		osliderbody.style.left = nowleft + 'px';
	}

	function index() {
		time = setInterval(function() {

			inow++;

			if(inow > osliderimg.length - 1) {
				inow = 0;
				changleft();
				osliderbody.style.transition = '';
			} else {
				changleft();
				osliderbody.style.transition = 'left 2s';
			}

		}, 5000)
	}

	//before i--
	before.onclick = function() {
		//清除定时器
		clearInterval(time);
		inow--;
		if(inow < 0) {
			inow = osliderimg.length - 1;
			osliderbody.style.transition = '';
		}

		changleft()
		//再调用
		index();
	}
	//next i++
	next.onclick = function() {
		//清除定时器
		clearInterval(time);
		inow++;
		if(inow > osliderimg.length - 1) {
			inow = 0;
			osliderbody.style.transition = '';
		}

		changleft()
		//再调用
		index();
	}

	//js实现水平轮播	222222222222222222
	var onsaleinow = 0;
	var onsaleul = document.getElementById('onsale-box-ul');

	var onsaleli = document.getElementsByClassName('onsale-img');
	var onsalenext = document.getElementById('onsale-next')
	var onsalebefore = document.getElementById('onsale-before')

	function onsalechangleft() {
		var nowleft = -onsaleinow * 1226;
		//js要带px单位
		onsaleul.style.left = nowleft + 'px';

	}

	//before i--
	onsalebefore.onclick = function() {

		onsaleinow--;
		if(onsaleinow < 0) {
			onsaleinow = 0;
			console.log(onsaleinow)
		}

		onsalechangleft()
		//再调用

	}
	//next i++
	onsalenext.onclick = function() {

		onsaleinow++;
		if(onsaleinow > 3) {
			onsaleinow = 3;
		}

		onsalechangleft()
		//再调用

	}

	///33333333333333333333333333333

	
	//tab切换

	$('.tab-head-item').mouseover(
		function(event) {
			var index = $('.tab-head-item').index(this);
			console.log(index)
			$('.tab-body-item').removeClass('block').addClass('none')
			$('.tab-body-item').eq(index).removeClass('none').addClass('block')

		})

	

})