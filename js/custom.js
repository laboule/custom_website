 var swiperH = new Swiper('.swiper-container-h', {
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
        type:"bullets"
      },
      calculateHeight:true,
     
    });
    var swiperV = new Swiper('.swiper-container-v', {
      direction: 'vertical',
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
      },
    });

    $(function() {
    	$(".with-caption").hover(()=>
    	{
    		$(".box-slide",this).show("slide", { direction: "left", easing: "swing"}, 150);
    		//$(".box-slide",this).show(100);

    	}, ()=>
    	{
    		$(".box-slide",this).hide("slide", {direction: 'left'}, 100);
    	})
	});


$(() => {
	

      tippy('.sublist_stack img');
      tippy('.rating');

 	const mail = document.querySelector('#mail_icon');

 	const mail_address = "pierre.travacca@gmail.com";

 	tippy(mail,{
 		placement:"right",
 	 	arrow: false,
 		interactive:true,
 		trigger:"mouseenter",
 		content:mail_address
 	});



 	$("#mail_icon").click(async () =>
 	{
 		copyToClipBoard();
 		mail._tippy.setContent("Copié !");
 		mail._tippy.show();

 		setTimeout(()=>{

 			mail._tippy.hide(300);
 			setTimeout(()=>mail._tippy.setContent(mail_address),350);
 			}
 			,1000);
 		

 	})

 	const copyToClipBoard = () =>
 	{
 				// copy mail to clipboard
		  var $temp = $("<input>");
		  $("body").append($temp);
		  $temp.val(mail_address).select();
		  document.execCommand("copy");
		  $temp.remove();	
 	}


});