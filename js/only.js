$('.btn').click(function(event) {
	music.play();

	$('.only_circle').removeClass('only_heart');
	$('.only_circle').addClass('only_circle1');
	$('.only_p').html('糟了！<br>心动的感觉');
	setTimeout(function(){
		$('.only_p').hide(0);
	    $('.btn').css('border', 'none');
	    $('.btn').addClass('btn1');
	},1500);
	setTimeout(function(){
		// $('.tree_gan').addClass('tree_gan1');

		// setTimeout(function(){
			$('.love').show();
		// },2000)
	},4500)

	
});
var num=0;
$('.love').click(function(){
	if(num==0){

		$('.shuidiv').css('transform', 'rotate(45deg)');
		setTimeout(function(){
			// $('.water').show();
			$('.water').addClass('watertop');
			setTimeout(function(){
				$('.water').css('transition', '0s');
				$('.water').removeClass('watertop');
				$('.shui_one').html("给我们的树浇水");
				$('.shuidiv').css('transform', 'rotate(0deg)');
			},2000)
		},1000)
		// setTimeout(function(){
		// 	$('.shuidiv i').addClass('shu');
		// 	$('.love').hide()
		// },2000)

		// 种子发芽
		setTimeout(function(){
			$('.tree_gan').addClass('tree_gan1');
			$('.onlybot').addClass('onlybota');
		},4000)
	}else if(num>0){
		$('.shuidiv').css('transform', 'rotate(45deg)');
		setTimeout(function(){
			$('.shuidiv').css('transform', 'rotate(0deg)');
			$('.water').css('transition', '0s');
			$('.water').removeClass('watertop');
		},2000)
		setTimeout(function(){
			$('.water').css('transition', '3s');
			$('.water').addClass('watertop');
			setTimeout(function(){
	           $('.only_tree').show(1000);
	           setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=9){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },1500)
	           setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=8){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },3000)
	           setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=7){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },4000)
	           setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=6){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },5000)
	           setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=5){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },6000)
	           setTimeout(function(){
		           	for(var i=0;i<$('.heart').length;i+=4){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },7000)
	           setTimeout(function(){
		           	for(var i=0;i<$('.heart').length;i+=3){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },8000)
	           setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=2){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },9000)
		       setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=1){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },10000)    
	           
		           
			},2500)
			setTimeout(function(){
				$('.tree_gan').addClass('tree_gan2');
			},1500)
			
			setTimeout(function(){
				 setTimeout(function(){
					$('.shuidiv i').addClass('shu');
					$('.love').hide();
					$('#onlytalk').show(500);
				},2000)
				 
				 
			},14500)

		},1000);
		if(num==1){
			setTimeout(function(){

						var mystr="时间是这么地巧，我在这里，而婷儿恰巧也在这里！<br/>&nbsp;&nbsp;&nbsp;&nbsp;就像一个顽皮的小男孩得到了他最喜欢吃的糖果，开始安静地幸福地小心翼翼地吃起了起来，满嘴都是甜味，还黏了一嘴,吃完了还要耍赖皮。<br/>&nbsp;&nbsp;&nbsp;&nbsp;而婷儿似乎是一颗吃不完的糖果，有时候甜到鼾，有时候却带点酸。婷儿是不是酸梅味的呢？？思考ing<br/>&nbsp;&nbsp;&nbsp;&nbsp;而我似乎坠入了这个酸酸甜甜的深渊，却怎么也出不来，其实是不愿出来，这个爱你的深渊。<br/>&nbsp;&nbsp;";
						var num1=0;
						var timer=setInterval(function(){

							
							if(num1<=mystr.length){
								$('.only_pcon').html(mystr.substr(0,num1));
								num1++;
							}else{
								clearInterval(timer);
								setInterval(function(){
		setInterval(function(){
			// var date=new Date();
			var date1=new Date(2018,10,12);  //开始时间
			 
			var date2=new Date();    //结束时间
			var date3=date2.getTime()-date1.getTime()  //时间差的毫秒数


			//计算出相差天数
			var days=Math.floor(date3/(24*3600*1000))
			 
			//计算出小时数

			var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
			var hours=Math.floor(leave1/(3600*1000))
			//计算相差分钟数
			var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
			var minutes=Math.floor(leave2/(60*1000))
			//计算相差秒数
			var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
			var seconds=Math.round(leave3/1000)
			// alert(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
			$('#onlytime').html(`<h3>这是我们相遇的~</h3>第 <span class="onlyh1">${days}</span> 天 <span class="onlyh1">${hours}</span> 小时 <span class="onlyh1">${minutes}</span> 分钟 <span class="onlyh1">${seconds}</span> 秒`)
			$('#onlytime').show(3000);
		},1000);
	},1000)
							}
							
						},150)


					 },18500)
		}	
			
	}
	
	
	num++;
	
	
		

})

		