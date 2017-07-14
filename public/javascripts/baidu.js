(function (win,doc){
	function changeSize(){
		doc.documentElement.style.fontSize=doc.documentElement.clientWidth/320*50+'px';
	}
	changeSize();
	win.addEventListener('resize',changeSize,false);
})(window,document);

$(function(){
	var iNow=0;
	$('#ul li').click(function(){


		

		// if($(this).html()=='本地'){
		// 	$.ajax({
		// 		url:'aaaa',
		// 		type:'get',
		// 		success:function(data){
		// 			data.newstype
		// 			$()

		// 		},
		// 		error:function(err){
		// 			console.log(err)
		// 		}
		// 	})
		// }














		$('#ul li').removeClass('on');
		$(this).addClass('on');
		iNow=$(this).index();

		$('body .div').removeClass('show');
		$('body .div').eq(iNow).addClass('show');
	});
});

new Swiper('.swiper-container',{
	loop:true,                          //无限循环/无缝滚动
	pagination:'.swiper-pagination',	//生成小圆点
	paginationClickable:true,			//小圆点可点击
	autoplay:2000 						//自动播放 				
});
//标题轮播
var oUl=document.querySelector('#ul');
	
	oUl.addEventListener('touchstart',function (ev){
		//获取到手指
		var oldX=ev.targetTouches[0].pageX-oUl.offsetLeft;
		function fnMove(ev){
			var x=ev.targetTouches[0].pageX-oldX;
			if(x>=0){
				oUl.style.left=0;
			}else if(x<document.body.clientWidth-1660){
				x=(document.body.clientWidth-1660)+'px';
			}else{
				oUl.style.left=x+'px';
			}
		}
		document.addEventListener('touchmove',fnMove,false);
		document.addEventListener('touchend',function (){
			document.removeEventListener('touchmove',fnMove,false);
		},false);
	},false);

// var newstype=['推荐','百家','本地'];
// function newstype(name,_this){
// 	$('.div').html('');
// 	$('#ul li a').removeClass('on');
// 	$('_this').addClass('on');

// 	 $.ajax({

//             url:'/',
//             type:'get',
//             data:{newstype:newstype},
//             success:function(data){
//                 // location.reload();
               
//                     alert(datas.message);
//                   // refreshList();
                  
               
                  
//             },
//             error:function(err){
//                 console.log(err);
//             }

//       })
// }