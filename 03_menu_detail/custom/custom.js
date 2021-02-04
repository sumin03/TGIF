$(document).ready(function(e){

	$(".toggle").click(function(e){
		$(".gnb_icons").toggle();
	});
	  

    $("#prev").click(function(e){
		e.preventDefault();
		var last = $(".black_slide > li").last();//변수 last에 slide의 마지막 자손을 할당
		$(".black_slide").prepend(last).css("left","-90%").stop().animate({"left":"0px"},500);
		//.slide의 마지막 자손요소를 첫번째 자손위치로 보내주고 left속성값을 -1000px로 왼쪽으로 이동 시켜줍니다. 
		//animate함수로 left 속성값을 0으로 오른쪽으로 0.5초동안 이도시켜 줍니다.
			
	});
	
	$("#next").click(function(e){
		e.preventDefault();
		var first = $(".black_slide > li").first();
		$(".black_slide").stop().animate({"right":"90%"},500,function(){
			$(this).append(first).css("right","0px ")	
		})//.slide요소의 left속성값을 -1000px로 0.5초동안 왼쪽으로 이동 후 .slide요소의 첫번째 자손을 마지막 자손위치로 디오 
		//left속성값을 0으로 초기화  	
		
	});

	$(".toggle_btn").click(function(){
		$(".all_btn").toggle();
	  });

	
});