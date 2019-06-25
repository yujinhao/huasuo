$(function(){
	
	$('#header1').load('commontHTML/header.html')
	$('#header2').load('commontHTML/header2.html')
	$('footer').load('commontHTML/footer.html')
	
	
	
		//吸顶效果，回到顶部
	//对页面滚动条滚动的监听：要放在页面加载的时候
	
		
		$(window).scroll(function(event){
			var a=$(this).scrollTop()
			console.log(a)
			if(a>=40){
				$('#header2').css(
					{
						position:'fixed',
						left:'0',
						top:'0',
						
					}
				).css('z-index',20)
				$('#backTop').css('display','block')
//				$('#backTop').click(function(){
////					$('html, body').animate({scrollTop:0}, 'slow');
////用这个不行$('html, body').animate({scrollTop:0}, 'slow');			
//			document.documentElement.scrollTop=0;
//				})
			}else{
				$('#header2').css(
					{
						position:''
						
					}
				)
				$('#backTop').css('display','none')
			}
})
	
		$('#backTop').click(function(){
				$('html,body').animate({'scrollTop':0},1000)
			})
	//动画效果
	$('goods-item').hover(function(){
		
		
	})
	
	
	
	//动态创建商品列表
	
		
	var shop=[
	
	{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/2.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/3.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},	{
						"src": "img/商品列表/4.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/5.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/6.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/3.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/4.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},	{
						"src": "img/商品列表/3.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/6.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/4.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/5.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/5.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/6.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
				{
						"src": "img/商品列表/5.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/6.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
				{
						"src": "img/商品列表/5.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/6.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
				{
						"src": "img/商品列表/5.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/6.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
				{
						"src": "img/商品列表/5.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/6.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},{
						"src": "img/商品列表/5.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
					{
						"src": "img/商品列表/1.jpg",
						"name": "艾医生素颜霜",
						"price": "$1666",
						"btn": "到货提醒"
				},
				{
						"src": "img/商品列表/6.jpg",
						"name": "【年货节】a豆adol四面窄边框13.3英寸笔记本(Windows10home/i7-8550U/8GB内存/256GB SSD/集成显卡)-皓月银|1885|4999|【热销】",
						"price": "$1666",
						"btn": "加入购物车"
				},
			
				
				
	]
	
	
	$.each(shop,function(index,data){
						console.log(data);
					
		 var str = 	`
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
        		<button class="goods-btn"><span class="iconfont">&#xe707;</span> ${data.btn}</button>
        		
        		</li>
					
					`;
					
					
					$('#shopul').append(str)
			
				
			})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})