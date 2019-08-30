/*
Theme Name: give a nice day
Author: css3studio / slowalk
Version:1.0
*/

$(document).ready(function() {
	
	// init controller
	var controller = new ScrollMagic.Controller();

		
	// build scenes
    new ScrollMagic.Scene({triggerElement: "#sec1",duration:$("#sec1").height()})
        .setClassToggle("#indicator", "inactive") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec2",duration:$("#sec2").height()})
        .setClassToggle(".l2", "active") // add class toggle
        .addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec3",duration:$("#sec3").height()})
		.setClassToggle(".l3", "active") // add class toggle
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec4",duration:$("#sec4").height()})
		.setClassToggle(".l4", "active") // add class toggle
		.addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec5",duration:$("#sec5").height()})
        .setClassToggle(".l5", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec6",duration:$("#sec6").height()})
        .setClassToggle(".l6", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec7",duration:$("#sec7").height()})
        .setClassToggle(".l7", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec8",duration:$("#sec8").height()})
        .setClassToggle(".l8", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec8 .inner",duration:$("#sec8 .inner").height()})
        .setClassToggle(".ribon", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec9",duration:$("#sec9").height()})
        .setClassToggle(".l9", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec10",duration:$("#sec10").height()})
        .setClassToggle(".l10", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec11",duration:$("#sec11 .inner").height()})
        .setClassToggle(".l11", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".sub_footer_wrap",duration:$(".sub_footer_wrap").height()})
        .setClassToggle("#indicator", "inactive") // add class toggle
        .addTo(controller);


	//전쟁속 아이와 팔찌 슬라이드
	$('#sec5 .slide').slick({
		initialSlide:0,
		prevArrow : "#sec5 .controls .prev",
		nextArrow : "#sec5 .controls .next",
		speed: 300,
		dots:true,
		appendDots: $('#sec5 .controls .indicator'),
		customPaging: function (slider, i) {
		  return  (i + 1) + '/' + slider.slideCount;
		}
	});
	$('#sec6 .slider ul').slick({
		centerMode: true,
		centerPadding: 0,
		slidesToShow: 1,
		dots:true
	});
    //인디게이터 링크이동 효과
    $("#indicator li a").click(function(event){     
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500,"linear");
    });
    $("#indicator li a").mouseover(function(event){     
        $(this).parent().parent().addClass('mouseover');
    });
    $("#indicator li a").mouseout(function(event){     
        $(this).parent().parent().removeClass('mouseover');
    });

	//$('#ribon_path').velocity({ 'stroke-dashoffset': 3300 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 3000, delay: 0 });
});

