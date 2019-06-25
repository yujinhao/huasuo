$(function() {

	$('#header1').load('commontHTML/header.html')
	$('#header2').load('commontHTML/header2.html')
	$('footer').load('commontHTML/footer.html')

	//吸顶效果，回到顶部
	//对页面滚动条滚动的监听：要放在页面加载的时候

	$(window).scroll(function(event) {
		var a = $(this).scrollTop()
		console.log(a)
		if(a >= 40) {
			$('#header2').css({
				position: 'fixed',
				left: '0',
				top: '0',

			}).css('z-index', 20)
			$('#backTop').css('display', 'block')
//			$('#backTop').click(function() {
//				//					$('html, body').animate({scrollTop:0}, 'slow');
//				//用这个不行$('html, body').animate({scrollTop:0}, 'slow');			
//				document.documentElement.scrollTop = 0;
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
	var anow = 0;

	var modulesliderul = document.getElementById('module-slider-ul');

	var modulesliderli = document.getElementsByClassName('module-slider-li');
	var moduleslidernext = document.getElementById('module-slider-next')

	var modulesliderbefore = document.getElementById('module-slider-before')

	$('.module-slider-btn-li').click(function() {
		//定义索引值
		anow = $('.module-slider-btn-li').index(this)
		//           console.log(btnvalue)
		var nowleft = -anow * 1226;
		//js要带px单位left=;

		modulesliderul.style.left = nowleft + 'px';
		modulesliderul.style.transition = '';
	})

	//js实现水平轮播	

	indexth()

	function changleftth() {
		var nowleft = -anow * 1226;
		//js要带px单位

		//			

		modulesliderul.style.left = nowleft + 'px';
	}

	function indexth() {
		timeth = setInterval(function() {

			anow++;
			//				console.log(li.length)
			if(anow > modulesliderli.length - 1) {
				anow = 0;
				changleftth();
				modulesliderul.style.transition = '';
				//				
			} else {
				changleftth();

				modulesliderul.style.transition = 'left 1s';

			}

		}, 2000)
	}
	//before i--
	modulesliderbefore.onclick = function() {
		//清除定时器
		clearInterval(timeth);
		anow--;
		if(anow < 0) {
			anow = modulesliderli.length - 1;
			modulesliderul.style.transition = '';
		}

		changleftth()
		//再调用
		index3();
	}
	//next i++
	moduleslidernext.onclick = function() {
		//清除定时器
		clearInterval(timeth);
		anow++;
		if(anow > modulesliderli.length - 1) {
			anow = 0;
			modulesliderul.style.transition = '';
		}

		changleftth()
		//再调用
		indexth();
	}

	var shop = [

		{
			"src": "img/商品列表/1.jpg",
			"name": "艾医生素颜霜",
			"price": "$1666",

		},
		{
			"src": "img/商品列表/3.jpg",
			"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
			"price": "$1666",

		}, {
			"src": "img/商品列表/4.jpg",
			"name": "艾医生素颜霜",
			"price": "$1666",

		},
		{
			"src": "img/商品列表/5.jpg",
			"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
			"price": "$1666",

		},
		{
			"src": "img/商品列表/1.jpg",
			"name": "艾医生素颜霜",
			"price": "$1666",

		},
		{
			"src": "img/商品列表/6.jpg",
			"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
			"price": "$1666",

		},
		{
			"src": "img/商品列表/3.jpg",
			"name": "艾医生素颜霜",
			"price": "$1666",

		},
		{
			"src": "img/商品列表/4.jpg",
			"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
			"price": "$1666",

		}, {
			"src": "img/商品列表/3.jpg",
			"name": "艾医生素颜霜",
			"price": "$1666",

		},
		{
			"src": "img/商品列表/6.jpg",
			"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
			"price": "$1666",

		},
		{
			"src": "img/商品列表/4.jpg",
			"name": "艾医生素颜霜",
			"price": "$1666",

		}
	]

	$.each(shop, function(index, data) {
		console.log(data);

		var str = `
					<li class="goods-item">
        			<span class="goods-love"><span class="iconfont">&#xe61a;</span>收藏</span>
        		<div class="goods-pic">
					<a href="aidoshop.html"><img class="action-img" src="${data.src}"/></a>
        		</div>	
        		
        		<div class="goods-info">
        			<h3 class="goods-name">${data.name}</h3>
        			<div class="goods-price">
        				<span class="price">${data.price}</span></div>
        		</div>
        		
        		
        		</li>
					
					`;

		$('#shopul').append(str)

	})

})